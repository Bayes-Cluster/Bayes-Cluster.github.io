---
sidebar_position: 2
---


# Quick-Start

## Step 1: Log in to the Kubeflow Dashboard

Open the URL given to you (something like https://kubeflow.example.com). and log in using your username/password and you’ll land on the Kubeflow Central Dashboard.

<img src="https://e4ac516.webp.ee/2025/08/kubeflow-loginpage.png" alt="Notbooks Namespace" height="500"/>

## Step 2: Create or Select a Namespace
    
1. For the user who logs into Kubeflow for the first time, you may see the pop-up window below:

    <img src="https://www.kubeflow.org/docs/images/dashboard/auto-profile-step-1.png" alt="Example banner" height="500"/>
2. Click the button with `Start Setup` and type the name you want: 

    <img src="https://www.kubeflow.org/docs/images/dashboard/auto-profile-step-2.png" alt="Example banner" height="500"/>

## Step 3: Create a New Notebook
On the left side menu, click "Notebooks"

You’ll see a list of existing notebooks (or an empty screen if you have none)

|    |   | 
| :------- | ---------- | 
| step 1. Change the Notebook Name, e.g. `notebook` | <img src="https://e4ac516.webp.ee/2025/08/kubeflow-notebooks-step-1.png" alt="Example banner" width="2000"/> |
| step 2. Change the Size and Access Mode | <img src="https://e4ac516.webp.ee/2025/08/kubeflow-notebooks-step-2.png" alt="Example banner" width="2000"/> |
| Step 3. Expand the dropdown and choose the `Mount Shared Public Directory` and change the affinity to `RTX 4090D Nodes`  | <img src="https://e4ac516.webp.ee/2025/08/kubeflow-notebooks-step-3.png" alt="Example banner" width="2000"/> |

After all the configuration, click `LAUNCH`.


## Step 4: Connect to the Notebook


Once the notebook is running, You’ll see a green “Running” badge. Click “Connect” to open your Jupyter Notebook

✅ You now have a live Jupyter Notebook running on Kubeflow!

<img src="https://e4ac516.webp.ee/2025/08/kubeflow-notebooks-connect.png" alt="Example banner" height="500"/>

