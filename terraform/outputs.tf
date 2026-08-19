output "instance_name" {
  description = "Name of the BookHaven Compute Engine instance"
  value       = google_compute_instance.bookhaven_node.name
}

output "instance_public_ip" {
  description = "Public IP address of the BookHaven Compute Engine instance"
  value       = google_compute_instance.bookhaven_node.network_interface[0].access_config[0].nat_ip
}

output "vpc_name" {
  description = "Name of the BookHaven VPC"
  value       = google_compute_network.bookhaven_vpc.name
}

output "subnet_name" {
  description = "Name of the BookHaven subnet"
  value       = google_compute_subnetwork.bookhaven_subnet.name
}
