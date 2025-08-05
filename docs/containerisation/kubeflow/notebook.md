---
sidebar_position: 2
---

# NoteBook

Kubeflow Notebooks provides a way to run web-based development environments inside your Kubernetes cluster by running them inside Pods.

## Key Features

1. Native support for popular IDEs: Currently supports JupyterLab, with RStudio and Visual Studio Code integrations coming soon.
2. Cluster-based notebook containers: Users can create and run notebook environments directly within the cluster, eliminating the need to run notebooks locally.
3. Standardized notebook images: Administrators can provide pre-built notebook images containing the required libraries and dependencies tailored to the organization’s needs.
4. Access control via RBAC: Notebook access and sharing are managed through Kubeflow’s Role-Based Access Control (RBAC), ensuring secure and flexible collaboration.

## Detailed Steps

1. Before we start using the Notebook, please open the kubeflow [central dashboard](https://kubeflow.artifex.icu) in your browser.

2. Select a Namespace: 
    * Click the namespace dropdown to see the list of available namespaces.
    * Choose the namespace that corresponds to your Kubeflow Profile. 
        <img src="https://www.kubeflow.org/docs/images/notebooks-namespace.png" alt="Notbooks Namespace" heigh="120"/>

3. Click `Notebook Servers` in the left-hand panel:
    <img src="https://www.kubeflow.org/docs/images/jupyterlink.png" alt="Jupyter Link" heigh="120"/>

4. Click `New Server` on the `Notebook Servers` page:
    <img src="https://www.kubeflow.org/docs/images/add-notebook-server.png" alt="Add Notebook Server" heigh="120"/>

5. Enter a “Name” for your notebook server.
    * The name can include letters and numbers, but <u>no spaces</u>.
    * For example, `my-first-notebook`.

6. Select a Docker Image:
    * Custom image: If you select the custom option, you must specify a Docker image in the form registry/image:tag. (See the guide on container images.)
    * Standard image: Click the “Image” dropdown menu to see the list of available images. (You can choose from the list configured by your Kubeflow administrator)

7. Specify the Amount of CPU:
    * ~~Specify the amount of “CPU” that your notebook server will request.~~ For the testing stage, the amount of CPU is fixed.

8. Specify the amount of RAM:
    * Define the amount of RAM your notebook server will request.

9. Configure Workspace Volume:
    * Specify only **ONE** workspace volume to mount as Persistent Volume Claim (PVC) on your home directory.
    :::danger
    The default value of home directory is `/home/jovyan/`. Do not change this value unless you fully understand the implications.
    ::: 

10. (Optional) Configure Data Volumes
    * Optionally, specify one or more data volumes to mount as additional PVCs.

11. (Optional) Specify GPU: 
    * Choose the number of GPUs your notebook server will request.
    * By default, selecting **None** will put you in shared GPU mode.
    * To exclusively occupy **entire X GPU**, select **X**.

12. Sepecify the Advanced Settings
    :::tip
    It is recommended to enable shared memory by default unless you fully understand the implications of disabling it.
    :::
    * Enable the shared memory
    * Specify Shared Storage and GPU Affinity
    * Expand the `Configurations` section.
        * Enable the option `Mount Shared Public Directory` to access shared storage (`/home/jovyan/huggingface/` and `/home/jovyan/public-data`).
        * Select the GPU type based on your workload:
            * RTX 3080
            * RTX 4090 (recommended for most use cases)
    
    <img src="https://32cf906.webp.li/2025/08/kubeflow-configuration.png" alt="EKubeflow Configuration" heigh="120"/>


14. Click `LAUNCH` to create a new Notebook CRD with your specified settings.
    * You should see an entry for your new notebook server on the “Notebook Servers” page
    * There should be a spinning indicator in the “Status” column.
    * It can take a few minutes for kubernetes to provision the notebook server pod.
    * You can check the status of your Pod by hovering your mouse cursor over the icon in the “Status” column.

15. Click `CONNECT` to view the web interface exposed by your notebook server.