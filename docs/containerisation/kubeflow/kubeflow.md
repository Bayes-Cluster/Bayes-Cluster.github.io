---
sidebar_position: 1
---

# Kubeflow

## First time of Kubeflow

For the user who logs into Kubeflow for the first time, you may see the pop-up window below:

<img src="https://www.kubeflow.org/docs/images/dashboard/auto-profile-step-1.png" alt="Example banner" heigh="200"/>

Click the button with `Start Setup` and type the name you want:

<img src="https://www.kubeflow.org/docs/images/dashboard/auto-profile-step-2.png" alt="Example banner" heigh="200"/>

:::tip
We highly recommend using your username as the name of your Namespace. This helps keep your resources organized and easily identifiable within the cluster.
:::

After completing this step, you will be redirected to the Kubeflow dashboard and you can start using Kubeflow to create and manage your machine learning workflows, notebooks, and pipelines within your namespace.

:::warning
1. **Namespace Isolation**: Your namespace acts as a personal workspace, isolating your resources from other users. This ensures your workloads and data remain secure and separate.
2. **Profile Management**: You can manage your profile and namespace settings anytime from the Kubeflow dashboard.
3. **Subsequent Logins**: After the initial setup, you won’t need to repeat the namespace creation step. Logging in will take you directly to your Kubeflow workspace.