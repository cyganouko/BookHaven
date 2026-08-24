resource "google_compute_network" "bookhaven_vpc" {
  name                    = var.network_name
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "bookhaven_subnet" {
  name          = var.subnet_name
  ip_cidr_range = var.subnet_cidr
  region        = var.region
  network       = google_compute_network.bookhaven_vpc.id

  secondary_ip_range {
    range_name    = "bookhaven-pods"
    ip_cidr_range = "10.20.0.0/16"
  }

  secondary_ip_range {
    range_name    = "bookhaven-services"
    ip_cidr_range = "10.30.0.0/20"
  }

  private_ip_google_access = true
}

resource "google_compute_firewall" "bookhaven_allow_ssh" {
  name    = "bookhaven-allow-ssh"
  network = google_compute_network.bookhaven_vpc.name

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]

  target_tags = ["bookhaven-node"]
}

resource "google_compute_firewall" "bookhaven_allow_http" {
  name    = "bookhaven-allow-http"
  network = google_compute_network.bookhaven_vpc.name

  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }

  source_ranges = ["0.0.0.0/0"]

  target_tags = ["bookhaven-node"]
}

resource "google_container_cluster" "bookhaven" {
  name     = "bookhaven-gke"
  location = var.zone

  network    = google_compute_network.bookhaven_vpc.id
  subnetwork = google_compute_subnetwork.bookhaven_subnet.id

  deletion_protection = false

  remove_default_node_pool = true
  initial_node_count       = 1

  networking_mode = "VPC_NATIVE"

  ip_allocation_policy {
    cluster_secondary_range_name  = "bookhaven-pods"
    services_secondary_range_name = "bookhaven-services"
  }

  workload_identity_config {
    workload_pool = "${var.project_id}.svc.id.goog"
  }

  release_channel {
    channel = "REGULAR"
  }

  resource_labels = {
    project     = "bookhaven"
    environment = "production"
    managed_by  = "terraform"
  }
}

resource "google_container_node_pool" "bookhaven" {
  name       = "bookhaven-node-pool"
  location   = var.zone
  cluster    = google_container_cluster.bookhaven.name
  node_count = 1

  management {
    auto_repair  = true
    auto_upgrade = true
  }

  node_config {
    machine_type = var.machine_type

    disk_size_gb = 30
    disk_type    = "pd-balanced"

    image_type = "COS_CONTAINERD"

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]

    labels = {
      app         = "bookhaven"
      environment = "production"
    }

    tags = ["bookhaven-node"]
  }
}
