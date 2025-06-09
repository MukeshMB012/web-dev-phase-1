# WSL and Ubuntu Installation Notes


{How to open your WSL Ubuntu terminal:
You can open PowerShell and type:
wsl}
---

## Step 1: Enable Windows Features for WSL

- Open **Command Prompt as Administrator**  
  *(Right-click on Command Prompt → Run as administrator)*

- Run these commands **one by one**:

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
dism.exe /online /enable-feature /featurename:HypervisorPlatform /all /norestart
   



- **Note:**  
The command for `Hyper-V` may give an error if you are on Windows Home edition — it’s okay to skip it.

- Restart your PC to apply changes.

---

## Step 2: Install Ubuntu via WSL

- After restart, open **Command Prompt as Administrator** again.

- Run the command:

wsl --install -d Ubuntu


- This will download and install Ubuntu Linux on WSL.

---

## Step 3: Set Up Ubuntu User Account

- When Ubuntu launches the first time, it will ask to:

1. Create a **Linux username** (e.g., `mukesh`).
2. Create a **password** for the Linux user.

- **Important:**  
When typing the password, no characters will appear on the screen (not even `*`). This is a normal security feature.

- Confirm the password by typing it again.

---

## Step 4: Ubuntu Terminal Ready to Use

- After setup, you will see a prompt like:

username@hostname:/mnt/c/Windows/System32$


- You can now run Linux commands.

- To run commands as administrator (root), use:

sudo <command>



Example:

sudo apt update