---
sidebar_position: 3
---

# Tensorboards and Volumes

## Tensorboards

Click on the Tensorboards tab in the left-hand menu of the Central Dashboard.

<img src="https://mlops-for-all.github.io/en/assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png" alt="Kubeflow Left Tab" heigh="120"/>

The TensorBoard server created in this way can be used just like a regular remote TensorBoard server. It can also be connected to Kubeflow Pipelines to automatically visualize training logs or metrics stored in shared volumes.

## Volumes

Next, click on the Volumes tab in the left-hand menu of the Central Dashboard.

<img src="https://mlops-for-all.github.io/en/assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png" alt="Kubeflow Left Tab" heigh="120"/>

You will see the following screen.

<img src="https://mlops-for-all.github.io/en/assets/images/volumes-8a47fc94771470514efa705ec8b6d0fe.png" alt="Kubeflow Volumes" heigh="120"/>

Volumes tab provides the functionality to manage the Persistent Volume Claims (PVC) belonging to the current user's namespace in Kubernetes' Volume (Volume).

By looking at the screenshot, you can see the information of the Volume created on the 1. Notebooks page. It can be seen that the Storage Class of the Volume is set `juicefs-sc`, which is the Default Storage Class installed at the time of Kubernetes cluster installation.

In addition, the Volumes page can be used if you want to create, view, or delete a new Volume in the user namespace.

:::note
The created volume can be mounted on multiple containers, however it depends on the access modes you choose:
    * ReadWriteOnce: the volume can be mounted as read-write by a single pod. ReadWriteOnce access mode still can allow multiple pods to access (read from or write to) that volume when the pods are running on the same pod. (⚠️ Not recommended)
    * ReadOnlyMany: the volume can be mounted as read-only by many pods. (⚠️ Not recommended)
    * ReadWriteMany: the volume can be mounted as read-write by many pods. (✅ Recommended )
:::

### Create a Volume

By clicking the `+ NEW VOLUME` button at the top right, you can see the following screen.

<img src="https://mlops-for-all.github.io/en/assets/images/new-volume-b14c633d4f22b7948f111122da491ccd.png" alt="Kubeflow Create Volumes" heigh="120"/>

You can create a volume by specifying its name, size, ~~storage class~~, and access mode.

When you specify the desired resource specs to create a volume, its Status will be shown as Pending on this page. When you hover over the Status icon, you will see a message that this (This volume will be bound when its first consumer is created.)

When the Status is shown as Pending on this page, you can still specify the name of the volume in the notebook server or pod that you want to use the volume and the volume creation will be triggered at that time.

:::tip
If you delete a Notebook Server, the volumes (PVCs) you created or attached to **it will not be deleted automatically**. 
:::

These volumes are persistent by design and remain in your namespace until you explicitly delete them. This allows you to retain your data even after deleting a notebook server, enabling you to:
    * Reuse the same volume when creating a new notebook server
    * Share data across different notebooks or workloads
    * Avoid unintentional data loss

---

## Mounting a Volume to TensorBoard

Once you have created a volume (e.g., to store training logs), you can mount it to a new TensorBoard instance for visualization:

1. Go to the Tensorboards tab.
2. Click + NEW TENSORBOARD.
3. Fill in the required fields:
    * Name: A unique name for the TensorBoard server.
    * Log Directory:
    * Use the volume you created earlier. For example: `<your-volume-name>` (the exact mount path depends on your setup or image)
4. Under the Data Volumes section:
    * Click Add Volume.
    * Select the PVC you just created.
    * Mount it to a path (e.g., `/home/jovyan/.tensorboard-logs`).
5. Click Launch.

Once started, TensorBoard will read logs from the mounted volume and render training metrics, loss curves, and other summaries.


:::danger
This action is irreversible. Make sure to back up any important data before deleting a volume.
:::

If you no longer need a volume:
    * Go to the Volumes tab in the left-hand panel.
    * Locate the volume you want to delete.
    * Click the trash bin icon next to it.
    * Confirm the deletion.

## Use Tensorboards after Experiment

1. Run the experiment, here is a example code:
    ```python
    import torch
    import torch.nn as nn
    import torch.optim as optim
    from torch.utils.tensorboard import SummaryWriter

    model = nn.Linear(1, 1)

    criterion = nn.MSELoss()
    optimizer = optim.SGD(model.parameters(), lr=0.01)
    writer = SummaryWriter(log_dir='runs/simple_example')

    x_train = torch.linspace(0, 10, 100).unsqueeze(1)
    y_train = 2 * x_train + 1

    for epoch in range(100):
        model.train()
        
        optimizer.zero_grad()
        outputs = model(x_train)
        loss = criterion(outputs, y_train)
        loss.backward()
        optimizer.step()

        writer.add_scalar('Loss/train', loss.item(), epoch)
        if epoch % 10 == 0:
            print(f"Epoch [{epoch}/100] Loss: {loss.item():.4f}")

    writer.close()
    ```

2. Go to the Tensorboards tab and click [New TensorBoard]. 
    * Fill in the required information on the New Tensorboard screen, then click [Create].
    * Choose the PVC that mounted on the home directory
    <img src="https://32cf906.webp.li/2025/08/kubeflow-tensorboard.png" alt="Kubeflow Tensorboard" heigh="120"/>


3. After TensorBoard is created, it will appear in the list of active boards.
    * Click the [CONNECT] button to open and view the TensorBoard instance.
    * This will open a new tab where TensorBoard is running and reading logs from the specified log directory.