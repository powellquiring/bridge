locals {
  region = "us-south"
  # region = "eu-de"
}

provider "ibm" {
  region = "${local.region}"
  bluemix_api_key = "${var.bluemix_api_key}"
  function_namespace = "acme_dev"
}

resource "ibm_function_action" "nodehello" {
  name = "${var.prefix}-get"
  exec = {
    kind = "nodejs:6"
    code = "${file("hellonode.js")}"
  }
}


