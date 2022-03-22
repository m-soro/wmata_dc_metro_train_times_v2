# WMATA Metro Train Arrivals

![image](https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/dc_metro_art.PNG)

A python executable that returns Washington Metropolitan Area Transit Authority(WMATA) train arrival times.

<div>

  <span class="animate__animated animate__fadeInLeftBig">![image](https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/demo.gif)</span>

</div>

[View the source code](https://github.com/m-soro/wmata_dc_metro_train_times_v2/blob/main/metro)

[Download the project](https://github.com/m-soro/wmata_dc_metro_train_times_v2/archive/refs/heads/main.zip)

[View real time arrivals from WMATA](https://www.wmata.com/schedules/next-arrival/)


---

**Note that you have to create a `config.py` file.**

There are two variables that are imported from this file.

![image](https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/config.png)

1. `wmata_api_key` - get this from [wmata developer website](https://developer.wmata.com/)
2. `tablefmt` - select from: 'pretty', 'grid', 'simple', 'fancy_grid' or take a look at [tabulate](https://pypi.org/project/tabulate/) website for supported table styles. I think the four above work well.

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
