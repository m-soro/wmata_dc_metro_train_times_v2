# WMATA D.C. Metro train arrival times

A python executable that returns Washington Metropolitan Area Transit Authority(WMATA) train arrival times.

![image](https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/demo.gif)

[See the source code](https://github.com/m-soro/wmata_dc_metro_train_times_v2/blob/main/metro)

---

The WMATA developer website provides a free API.

[![image](https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/wmatadevapi.png)](https://developer.wmata.com/)

*Default tier sufficient for most casual developers. Rate limited to 10 calls/second and 50,000 calls per day*

---

### Steps to run python scripts like any terminal commands.

To make your script executable, add the script's path to your .bash_profile.

1. `open -e .bash_profile` this opens your .bash_profile in your TextEdit app.

2. Add the path at the end of .bash_profile. *Here's mine*:
  ![image](https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/exe.png)

3. Restart your terminal.

4. Add this at the top of script:
    `#!/usr/bin/env python`

5. Change the script to an executable:
    `chmod +x [your python script]`

6. Run the script in terminal using just the filename.
