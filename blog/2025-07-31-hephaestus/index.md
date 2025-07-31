---
slug: chebyshev
title: From Bayes to Chebyshev
date: 2025-07-31
authors: [junjieliu]
tags: [recruit, Linux, AI, GPGPU, USBC]
---

Between 2025 and 2026, all users will transition from the Bayes cluster to the new Chebyshev cluster, and from SLURM to Kubernetes (K8S) as the primary platform for computational workloads.

This means moving away from using SLURM-based scheduling and the Bayes hardware infrastructure, and adopting a containerized, cloud-native workflow powered by K8S on Chebyshev. The migration will be carried out in phases over the next two years, overseen by a dedicated project team. The project is currently in its initial phase, with detailed planning scheduled to begin in August 2025.


## Why make this change?

1. Greater Scalability & Modernized Workflow
    Kubernetes offers more flexibility and scalability than SLURM, enabling modern, container-based workflows and streamlined job management.

2. A Strategic Computational Platform
    Chebyshev is designed for next-generation workloads, including support for high-throughput computing, GPU acceleration, and cloud-native integration.

3. Better Support for Researchers
    Kubernetes is increasingly the standard among research institutions and industry partners, enabling better compatibility and collaboration.

4. Enhanced User Experience for All
    Chebyshev and K8S provide a consistent user environment across platforms and locations, improving access for both local and international researchers.

5. Improved Security and Efficiency
    The new platform supports advanced authentication methods and automated resource orchestration, improving job security, monitoring, and overall efficiency.

## Project Outcomes

The USBC Maintenance Group anticipates clear benefits for all users of computational resources:
    * Enabling greater consistency in how computational workflows are developed and deployed, through standardized, container-based environments and reproducible configurations.
    * Leveraging the advanced capabilities of Kubernetes and Chebyshev to enhance resource management, scalability, and system security.
    * Supporting improved collaboration with both internal and external research teams by aligning with widely adopted cloud-native infrastructure and tooling.
    * Ensuring a measurable uplift in technical skills and digital fluency, especially in areas like container orchestration, job scheduling, and reproducible science.

| From                 | To                         |
|----------------------|----------------------------|
| Bayes Cluster        | Chebyshev Cluster          |
| SLURM Job Scheduler  | Kubernetes + Volcano Scheduler           |
| Shell-based scripts  | yaml-based scripts    |
| Static environments  | Dynamic, reproducible containers |
| Manual scaling & resource allocation | Automated orchestration & scaling |
| On-prem-only jobs    | Hybrid/cloud-ready workflows |

## Key Dates

<div style={{maxWidth: '600px', margin: '1.5rem 0'}}>

<div style={{marginBottom: '1.5rem'}}>
  <h3 style={{color: '#0078d4', marginBottom: '0.25rem'}}>August 2025</h3>
  <p>Project mobilisation and governance structure to be agreed and put in place.</p>
</div>

<div style={{marginBottom: '1.5rem'}}>
  <h3 style={{color: '#0078d4', marginBottom: '0.25rem'}}>Autumn 2025</h3>
  <p>Multifactor authentication is introduced for all user for better security.</p>
</div>

<div style={{marginBottom: '1.5rem'}}>
  <h3 style={{color: '#0078d4', marginBottom: '0.25rem'}}>Winter 2025</h3>
  <p>Some staff switch to the Chebyshev as <u><i>early adopters</i></u>.</p>
</div>

<div style={{marginBottom: '1.5rem'}}>
  <h3 style={{color: '#0078d4', marginBottom: '0.25rem'}}>Spring 2026</h3>
  <p>Staff migration to the Chebyshev, on a phased basis.</p>
</div>

<div style={{marginBottom: '1.5rem'}}>
  <h3 style={{color: '#0078d4', marginBottom: '0.25rem'}}>August 2026</h3>
  <p>
    All user complete the transition to the Chebyshev.
  </p>
</div>

</div>

