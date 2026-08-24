output "gke_cluster_name" {
  description = "Name of the BookHaven GKE cluster"
  value       = google_container_cluster.bookhaven.name
}

output "gke_cluster_endpoint" {
  description = "Endpoint of the BookHaven GKE cluster"
  value       = google_container_cluster.bookhaven.endpoint
}

output "gke_node_pool_name" {
  description = "Name of the BookHaven GKE node pool"
  value       = google_container_node_pool.bookhaven.name
}

output "vpc_name" {
  description = "Name of the BookHaven VPC"
  value       = google_compute_network.bookhaven_vpc.name
}

output "subnet_name" {
  description = "Name of the BookHaven subnet"
  value       = google_compute_subnetwork.bookhaven_subnet.name
}
