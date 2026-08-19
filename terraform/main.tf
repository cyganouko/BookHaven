resource "google_compute_network" "bookhaven_vpc" {
  name                    = var.network_name
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "bookhaven_subnet" {
  name          = var.subnet_name
  ip_cidr_range = var.subnet_cidr
  region        = var.region
  network       = google_compute_network.bookhaven_vpc.id
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

resource "google_compute_instance" "bookhaven_node" {
  name         = "bookhaven-node"
  machine_type = var.machine_type
  zone         = var.zone

  tags = ["bookhaven-node"]

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 30
      type  = "pd-balanced"
    }
  }

  network_interface {
    subnetwork = google_compute_subnetwork.bookhaven_subnet.id

    access_config {}
  }

  metadata = {
    enable-oslogin = "TRUE"
  }
}
