---
sidebar_position: 1
---

# Cluster Information

## Overview

The Bayes cluster is intended for running smaller jobs, as well as developing, debugging, and testing codes. It is a self-built and hosted  beowulf cluster. Each compute node has 20 cores 2.20 GHz Intel Skylake CPU-cores and 256 GB RAM. There are also two nodes with GPUs (NVIDIA-P100). For more details see the Hardware Configuration section below.

| NodeName          | CPU      | Memory | GPU             | Storage |
|-------------------|----------|--------|-----------------|---------|
| Control           | 20 cores | 128GB  | NA              | 240GB   |
| Compute2030005000 | 20 cores | 128GB  | NA              | 600GB   |
| Compute2030005001 | 20 cores | 128GB  | NA              | 3.0 TB  |
| Compute2030005002 | 20 cores | 128GB  | Tesla P100 12GB | 4.8TB   |
| Compute2030005003 | 20 cores | 128GB  | Tesla P100 12GB | 4.8TB   |


## How to Access the Bayes Cluster

You have to request an account before using the Bayes cluster, and then log in through SSH.

1. Requesting Access to Bayes: if you would like an account on Bayes, please ~~fill out the Application for to request an account~~ email the administrator: <a href="mailto:bayes@uicstat.com">bayes [AT] uicstat.com</a> with these information: 
   1. Name and Student/Staff ID number
   2. Which Department
   3. Propose of Usage
   4. Consent letter from the supervisor (required for student, research position and visiting staff) 
2. Logging into Bayes: `ssh <user_name>@hpc.uicstat.com`

## How to work on the Bayes Cluster

Since Bayes Cluster is runing a Linux system, knowing some basic Linux commands is hightly recommended. For an introduction to navigating a Linux system, here are some reference:
* <a href="https://training.linuxfoundation.org/training/introduction-to-linux/">Introduction to Linux</a> | by Linux Foundatation
* <a href="https://github.com/uschpc/workshop-intro-linux">Introduction to Linux and Command Line</a> | by USC-HPC 

Then, please read our <a href="/docs/intro">guideline of the Bayes cluster</a> to know more about the file systems, module system, and scheduling system running on Bayes cluster.

## Notice

The control node on Bayes should be used for the basic usage (log in, submit your job, file transfer, and etc.) only. **No jobs should be run on the control node**, other than brief tests that last no more than a few minutes.
