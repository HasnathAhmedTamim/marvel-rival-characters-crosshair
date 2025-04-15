const characters = [
  {
    id: 1,
    name: "Human Torch",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe6mCEWUflbv4M8H23Ww-Qhxo8LSRAJV_I4M2syku6ye69QKGbNlgH01DaW5Ccb_e4-1QA0EMIcZp-OmzED1R7LQJ_82a5rz4WsQltuGU0ZYX8yxG52sq3QQSCDgGbtYliDnb5r?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcVw_lTv7YhCoP11kwnhjrpnHjuvthVJxMiTAilD2xjjZvWVWhz-hps21ob8quzpFI3pTg4KsDB9t1i6wuGT0dz5WYTppB5yXk01fRUw_Yua_A15qO2kb7LKTAdic9XxJQW8mo?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A fiery hero with the ability to control flames.",
    crosshairCode:
      "4;0;10.0,0.0,0.0,17.0;100.0,60.0,42.0,100.0;20.0,80.0,85.0,0.0;100.0,100.0,100.0,100.0;0.0,100.0,0.0,62.0;33.0,30.0,54.0,33.0;14.000000000000002;100.0,60.0,42.0,100.0;0.0;5.0,3,5.0,2.0;0.0,1.0,1.0",
  },
  {
    id: 2,
    name: "The Thing",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdwDqT55t564ztEvado1MDKh1a39PvK2b6XvB1PpABLoYqtNOMCFLW2jBTWQkJZIlzlxX2x5CFXVQRU0cqe1Tq0wJO5ghu-7QpjtaZONjY4cO5pdfoYgC-e-WiXqqVTgAx3iVo0?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdUQ0cUjHv5jC7gLO2g8BHa-Gz2GuaBnXkLXmtmn9VVRivvqBrS_dxSCmi1HAroPSwqRWkuJ0iWfiSJHFetRW-HZE8jibFaKq5cjeA0nW_PNvG4YShYTckq1ZpoIMT5BG-uOqFq?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A rock-skinned hero with immense strength.",
    crosshairCode:
      "4;0;10.0,0.0,0.0,100.0;100.0,27.0,0.0,0.0;20.0,100.0,85.0,0.0;33.0,100.0,100.0,100.0;0.0,100.0,100.0,100.0;33.0,100.0,3.0,33.0;30.0;100.0,27.0,0.0,0.0;45.0;5.0,3,3,2.0;0.0,1.0,1.0",
  },
  {
    id: 3,
    name: "Magik",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeJOs_JSOnd0nTqHpF3I0H6KhSUdKwt5RmbDUmSbgNtmnGILl0ucgzqY-DtoxqDqokAUffJMb4dQJ3hKgt_b6AN1wzGeHryxYXQvTwBPhKZjzdWDB-7f1LGoD2f_qn5rk9bZMA?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXecU--8a22nxOibdMmQLtAAhYyzkQ5Ebd5UWcJ4Q8cey_6fRVnxvqBoHJbCPpFQ5WlSlCFo9OiHk7KXslFo2gZk-Nyi4J8rsRMSMP6gcEf5SfrAvbcIkzKXIVEihQOWtcXwAOfR?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A sorceress with the power of teleportation.",
    crosshairCode:
      "4;0;10.0,62.0,11.0,6.0;100.0,21.0,100.0,0.0;50.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,0.0;33.0,29.0,19.0,33.0;88.0;100.0,21.0,100.0,0.0;0.0;5.0,5.0,5.0,5.0;0.0,1.0,0.8",
  },
  {
    id: 4,
    name: "Venom",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcrbYlXWhEBJVwXdtA9zqyI1cNkmMdO-e8ZjELFT4evQ-HKFpEyL0ozCrpmDeZ_u0p0dzUBbRZOQnqDBxJa6v_DEHUE48y6I-JHonxtjk0OBoZS-rmxpErAFSUf2rO06aVN1kwR?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeYA9x5QB2s3N2HVT9hUIAZ2GblsPBZ6PCs1tOWHz47SHHJXu7RZ6FC5JjFup-sW8yYzhStbInxSb5zP2Wd7LOD0bmvNVmd4s3vb0RaBmPLrvD1ANdjHgsKZNtDCEQ1Ij6QBRgi?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A symbiote that grants its host immense power.",
    crosshairCode:
      "4;0.0;10.0,0.0,11.0,17.0;100.0,100.0,100.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,100.0,21.0,33.0;73.0;100.0,100.0,100.0,0.0;0.0;4,4,4,4;1.0,1.0,1.0",
  },
  {
    id: 5,
    name: "Peni Parker",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaEAf0U-2u3aOcUMm2rpPfzwzHeSEHUJM9nKo1OBWdhOOCmYdL0t2y4X2txQSuwlYiJT1nB5-p3y3Jt7TRVDEr06BmDTsDqId6nyzJIWyxYOEJvksJMY0OpWtPGyF5dGPKlY-8?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfpqjEpnAIRxotSkT-ezFSwPk1QxA8E_aEkLaSUID5Zy0dT7gJna2IrqP9AC0rxJ45dMcQtXjnnfRB1_Mq3K304GX2CmuchPtc3OiGy7bWjo-wQ5C68jaJAzriNhFc1hXNZK0uJ?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A young pilot with a mech suit.",
    crosshairCode:
      "4;0;10.0,0.0,9.0,17.0;100.0,40.0,100.0,100.0;20.0,0.0,0.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,0.0,62.0;33.0,100.0,40.0,33.0;70.0;100.0,40.0,100.0,100.0;0.0;5.0,1,0,2.0;1.0,1.0,1.0",
  },
  {
    id: 6,
    name: "Moon Knight",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf3uRpexzRt5VKv-o_cgDy56hWPtxvUCEnFzK3cQjkeY_ajvh4us8MmUNmfaJlXsNv8_TgY3Y4RKBMVe09lwra-mZkSXelQBI_Mx6N4Kx0SdAPdss9KcpF8irI6xzwjCwPv8_M_?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfSOKsfFydc83F_PWf4MaSUzgoQLppxpdcsJ_GgCxUEHXYzTek17o5W5Rt-uYNG5GzRTjB4LcS7ooX7e2jnF5sOpZ6HvMhLuG1qbdokippx5fUPmxp02aY8ou49Z2d6NQx1Uuzj?key=-LQZ76nzaxVek-keEiFL4cZV",
    description:
      "A hero with multiple personalities and a connection to the moon god.",
    crosshairCode:
      "4;0;10.0,0.0,100.0,0.0;100.0,100.0,47.0,100.0;20.0,57.0,100.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,100.0,0.0;33.0,63.0,55.0,33.0;9.0;100.0,100.0,47.0,100.0;0.0;5.0,3.0,5.0,4.0;0.388,0.682,1.0",
  },
  {
    id: 7,
    name: "Doctor Strange",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfTFpHo3j5ndeJT29mLU9qNBPmPzUZFuG7dtAJ_t5QTgW2XGbwRSu75fTsWBrxjs_GdPl4WqlouuEHSJIRm-aX_D-a2jWaGfcMVML-VS8fzFCw1M_9Xs4iJHGbanAxmCbOC5JWZ?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfumQHlnmszFiMZblNFKIR66exWHUiIPrMvOEINvxPNbhCHTBLU09In2XZ8XtsLtsFV5kVTNDoCczRNsna1U15BExWoV0IKq5wjEyr-fLRcStI8GiiACYs_d_qUy0h0t6_LxZGn?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A master of the mystic arts.",
    crosshairCode:
      "4;0;10.0,0.0,100.0,0.0;100.0,100.0,15.0,100.0;20.0,65.0,0.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,0.0,62.0;33.0,12.0,80.0,33.0;8.0;100.0,100.0,15.0,100.0;0.0;5.0,3,5.0,3;0.0,1.0,1.0",
  },
  {
    id: 8,
    name: "Groot",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdVN4k1LOYav-UfV6-pLq27jPg-vnolO_u056FSbjN9rkLvepbA8FeWay4WW3fbbz2BOjBPa_1152vma9JWpjo1076-WtBN4ubNTjcyL-RTHpBP3G1-Zg406EIVnlIiruJqlSf3?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdNdO9gjKJGe0N2k1i9J3h9DmJuCjxrGZTgczW1sfx_7WRexsdUW2Ir3vWAubUdrjM5C-DJURaJvClS0xwGDq5-cGdWxmCXv3icjPEpHjfr_m5w5f6NUTAIdiufbhhV89M_QkqJ?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A sentient tree with regenerative abilities.",
    crosshairCode:
      "4;0;10.0,0.0,10.0,0.0;100.0,35.0,90.0,50.0;20.0,75.0,0.0,0.0;100.0,50.0,0.0,100.0;0.0,0.0,0.0,62.0;33.0,90.0,40.0,33.0;90.0;100.0,35.0,90.0,50.0;0.0;5.0,3,0,3;0.0,0.0,0.0",
  },
  {
    id: 9,
    name: "Thor",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXea2cS6wm9UMPP_0OOFWpfd1h3tP6ZwQK17hairUrxh4X3EynaJaBrwi47WGAx48ECGGdOxfwHj8sFuWnrBttRmQtR-xxGTHYLuyWPv_qXBez86II1a7UpRZSnuMA4zJ6yV9Wc?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfXUC97C-I1X4gSezKTIih9I2Af9XDsxrrslD6qb0aspMxqDvRzsV9DHWH6STnUzCfwsQzQYOn9rRNGulQAnZWHJIW67YN0Yw6KLwLRDNVhIN9FqchQ6MtaPE_Bb9KEihIqEji2?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "The god of thunder, wielding Mjolnir.",
    crosshairCode:
      "4;0;10.0,0.0,100.0,0.0;100.0,100.0,15.0,100.0;20.0,65.0,0.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,0.0,62.0;33.0,15.0,50.0,33.0;8.0;100.0,100.0,15.0,100.0;0.0;5.0,3,5.0,3;0.0,1.0,1.0",
  },
  {
    id: 10,
    name: "Hulk",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfn8fjywFW8IzwBNkyVo0RBvdUkb6DTWkb7C6ImKywpzSH-mOtyecfxneCevJGWGpiw71RmqnV3yXApAZVesSEYzySOl7krHNwWyIcLcD2IG7fRnWWSR8eFZlQzqnhYN07z3fOh?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfNIo_lmCIw4jNemuabQLB0c8DPqHGU6T34ma0H2oLZDG-k5W5ineHpCBmBlOZh-fCA9K2B-TcWKtWVYKdKyFJUbTy_XnVGPQsjb_mfhjn5ggT76BJm3b6Xn97ZONRSaMNoIzPr?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "The green giant with incredible strength.",
    crosshairCode:
      "4;0.0;10.0,0.0,11.0,17.0;100.0,100.0,100.0,16.0;20.0,0.0,100.0,0.0;100.0,100.0,100.0,100.0;0.0,100.0,100.0,62.0;33.0,5.0,46.0,33.0;11.0;100.0,100.0,100.0,16.0;0.0;5,5,5,2;0.0,1.0,1.0",
  },
  {
    id: 11,
    name: "Black Widow",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZuz50569NRwGFrLnb4JC7RBXFlZmF281zYCmJQXw1B4N2g8lddqT4RskxM280JZfdZXa1QiNgtxwqWXNyv2kzgbEi_WQvhytarkW6tF1fAFV_ol54mzJvk34ldMPt1AnQjoPi?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfjx-eW_En05ZcpdAXPvxmuFRHtWeILCJ3a_U1YqErYv-KEWhcd7huAtFJmKQi8MYG8PPOBV-d2-Wvr8vy5z8dt4lBqRfib3nY8QiqRMnS5GxAnRGtblqyvJJGuVKlg5Fmz3ic?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A highly skilled spy and martial artist.",
    crosshairCode:
      "4;0.0;10.0,0.0,0.0,32.0;100.0,100.0,100.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,0.0,5.0,33.0;5.0;100.0,100.0,100.0,0.0;0.0;5,5,5,2;0.0,1.0,1.0",
  },
  {
    id: 12,
    name: "Captain America",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd6bUnCa5tgq1FAMdqiWqS2MJkbQC9_uJID4TeO1Y5VH5yyguyEJM_rLc0UxN7-yJsqSnMnL-5UIheeQC1B-vjpV1SKVzAYnL7McVgKMVdFdOYEre83WhYLh1hoTXmZ73bwqDet?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfaG0F6BcuhD_Jh-kZ79QyFCMI4aKYcMZjvsiuPvu-diCEXP7LCEavsxC8fN0OqiRlBiBv1q31GcnqPa8_XW3QbFD9wNgMJH3UjTKjVJ1jXqU_T0Zf-5YwzV2hX2BPpe7PQKotq?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "The super soldier and leader of the Avengers.",
    crosshairCode:
      "4;0;10.0,0.0,9.0,17.0;100.0,100.0,0.0,100.0;20.0,0.0,0.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,0.0,62.0;33.0,83.0,0.0,33.0;13.0;100.0,100.0,0.0,100.0;0.0;5.0,3,0.0,3;1.0,1.0,1.0",
  },
  {
    id: 13,
    name: "Iron Man",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcSL_YS1vhw1Wz5S2kYv6EskAj_f4rui2XnCt3owfHGDLQIPj-aIemOHRWjFWZDco0VdJbPq8C1giXM7L7tKebZHYxszmcJQLgyuE3oRRQXkmKvaEYLxnTjGnN57HunITRsjXDM?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeVEuU9hq-nDAe0es01zwEuM8gqXAVnnbdW80eBjRalgxv-XNMgUMkDsdu4PJ6f8bSLb1f7xqk0JPLjdHKx3BGbnR0g_WUFdLZkbogNYZUjGIsajfip3ZtCwC2EKvDysxQ3qIM?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A genius inventor in a powerful suit of armor.",
    crosshairCode:
      "4;0;10.0,0.0,0.0,13.0;100.0,100.0,5.0,100.0;20.0,52.0,100.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,100.0,62.0;33.0,33.0,87.0,33.0;57.99999999999999;100.0,100.0,5.0,100.0;76.0;5.0,5.0,0.0,2.0;0.0,0.0,0.0",
  },
  {
    id: 14,
    name: "Scarlet Witch",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcbfvg_OeRhvYb7vaGbF1oYuZsgpXYZZmQyelQDAgw2QL2JLMfJziorBW5NaN6iFhdYfZBc-bAiZyMxBumknj8h3coS4p7uJW8dceXbjC-2Cau40J9RQji1OJ_eZ1A8OMdV4fkZ?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-QtL8PAHyBoKKIfqDOqnElx99BQpB4Pu3zTsH--3iT1RPnQDlcxks5Hp1oioJHr69NDbUKvPdKUaVapzcMUBjaWEkK3pwdNVSreUNmUjUzn5QBRS_6AVrJ-CyPe9Y6yj74qjd?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A powerful sorceress with reality-altering abilities.",
    crosshairCode:
      "4;0;10.0,0.0,9.0,17.0;100.0,100.0,0.0,100.0;20.0,0.0,0.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,0.0,62.0;33.0,58.0,0.0,33.0;13.0;100.0,100.0,0.0,100.0;0.0;5.0,3,0.0,3;1.0,1.0,1.0",
  },
  {
    id: 15,
    name: "Black Panther",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJOVRbW_Z2YDNo-mfP0_fCWLauRGX8FUE52sQ8Iz4rj9msorGFyHIcvznz394QANUNLQEWNNE_v2B9CvBtXh50-MFmCRJKrjBADI7906NfHgRW_V74-vQqMCgHiven5GZIDfM?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdnRldoRuevfT4bU0XIMX0F2uTpoy-KUxFn5C_OLrZd_MkU2jcxlXaGBayRF_Cr7BeB6BpYf0P0EpUrLJcXnibqSmgq6gBvghVY6kIcjxqXehbu-03l8hcUnre-OzMMLWAHLgYM?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A king with enhanced strength and agility.",
    crosshairCode:
      "4;0.0;10.0,100.0,35.0,17.0;100.0,100.0,100.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,48.0,9.0,33.0;8.0;100.0,100.0,100.0,0.0;0.0;5,5,5,2;0.0,1.0,1.0",
  },

  {
    id: 17,
    name: "Spider-Man",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXelco8hqVxWopc_44kWGHaz92TwtWvPdyU3Zz8U5ns1d8cwa8Vj3zTO4-01XVXB9a44JYNZrLjjPQHVJ6uBuSiyz0OZa2of1qPKxCfeIBrtbq8BX9OmJabgbd3fVw8lyggrV39h?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXda4v1l_G8dSO8YMw8X7hW1-N8M05Z1ZkU0TTdVFTAPcRAvlrsdkj_b7JCEVnW8kC_LAaLul558HvlfxzZnoFkfLNUlPZbpfYpoSz5OLYVoTN0Of7_N2b7s31Z4AKwbhmgRGVg?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A young hero with spider-like abilities.",
    crosshairCode:
      "4;0.0;10.0,0.0,100.0,17.0;100.0,100.0,18.0,0.0;2 0.0,20.0,0.0,0.0;100.0,100.0,4.0,100.0;0.0,0.0,100.0,62.0;33.0,4.0,32.0,33.0;8.0;100.0,100.0,18.0,0.0;0.0;5,3,5,2;1.0,1.0,1.0;",
  },

  {
    id: 20,
    name: "Wolverine",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe8SZP_tq1kS-bpqHH2KMATTRuakdZL9Loaq7zgunCwFMdnT9L4VGODe8GAlY0KVhfkmsWwiyAHK8tz__9jqGFitLsgJqWqk6AbesrZ8DClcx-DSeKmI4A0hTgbzuKzOsRfqxg9?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeeTflgp-kVan-alLNfi0c6MzedEgO4aiJ_5TLjnEq8Uy0-rilUO2m_R5O70cHVkSV73GXMpftqZ_yvIuKSxfPmsYBQsNuyshv1ckamkvrBIpsEZsJQsUIF99OCZVKICRdGWvzo?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A mutant with regenerative healing and claws.",
    crosshairCode:
      "4;0;10.0,0.0,0.0,25.0;100.0,0.0,0.0,100.0;20.0,0.0,0.0,0.0;0.0,0.0,0.0,0.0;0.0,0.0,0.0,0.0;33.0,0.0,0.0,33.0;0.0;100.0,0.0,0.0,100.0;0.0;5.0,3,3,3;1.0,0.941,0.0",
  },

  {
    id: 21,
    name: "Magneto",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcB6xwSLrHNpA6FuYVc4T1ad6l1ngK7YusgrTiECounfVILYlTque1Wtpj_vtoFCzwJtwRytmpv8UVX5nlsNrqyI0SvNJTz35OYrDPq-M-WHtZ-gcsyt7FKGkE4wpJzcUexTcm-?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcJVhdDtA_RsDJaM8auuoitHKpXEfPb2i7W5ZO1pqsQN5Pu_fs5gDvNokEmdvBrFAOGkhPHfzCpQz7CwSXTl2ZXbYhuMhiHTgBkmt3lS10TFn61IBdNeyhSoKXQ3hz5TchVJpuO?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A mutant with regenerative healing and claws.",
    crosshairCode:
      "4;0.0;10.0,18.0,9.0,17.0;100.0,100.0,100.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,100.0,18.0,33.0;8.0;100.0,100.0,100.0,0.0;0.0;5,5,5,2;0.0,1.0,1.0",
  },

  {
    id: 22,
    name: "Punisher",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZ0_5rMioe5eUUUd9Dv30pWKsm7cNQlMkN2zvM724hiw3WSM_K0eVrl6Bh8nfSLgKUxUI4jsuGIOYOKQLrsKVuNvUN1aNncrNYtvKhm1paR197VH3DNAgwxf1nsbNVI3rlf9Y?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe1VIQOt4Dgpw9dAGAjbe1AiE8683sz18XdaCTH2FK2U18Z9kaQo12dIQwHEIT6S_VCLX9te_Uej7pYEYuYDgfWd0nKPeHOtTBrlK7rurSQNO9VlGW5EJ5z_Nr0SmQIH3LzCatv?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0.0;10.0,0.0,11.0,17.0;100.0,100.0,8.0,0.0;20.0,0.0,85.0,0.0;100.0,100.0,100.0,100.0;0.0,33.0,0.0,62.0;33.0,5.0,51.0,33.0;11.0;100.0,100.0,8.0,0.0;0.0;5,5,5,2;0.0,1.0,1.0",
  },

  {
    id: 23,
    name: "Storm",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfYYw30wzEoakYnEbtp6-RLt5rNJ0ink6gTd6T4d66-ezx8RryQqsLLXfCAwBwy50lNsQ3HQ-3E6s6-eVZx6Zv_GFXPiFVo5uKhTSwIAwb3mEmPodYPIqRKLkpSsdhxLk12DuM?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdIWmRuAc4CbdKdaX9G1eMNZn_Zw3YBJ5uOUDdBlNQLPogCI2leh0HZ4taPuhxQd_HHJq_INbjWIyurcl-4tbqe6teuEvD4TdIsQ4IlZntvV9vibvh1A884qNGOa4HOZJwUGn1Y?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0;10.0,0.0,19.0,17.0;100.0,100.0,38.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,20.0,50.0,33.0;30.0;100.0,100.0,38.0,0.0;30.0;5.0,5.0,5.0,2.0;0.031,1.0,0.0",
  },
  {
    id: 24,
    name: "Hela",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcF__xY1mW18K89L8OQNDbFECupMEOjGgpaBhB-Gu61NX2ltO_jhISLGYNj7IZ5pmH7iBK8QjQ5bQ3Nd-vrX8XZU6ieZR5UNBopBGS00kFhe21emTVvcevJFy1UoHYno40cZMpU?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXex8Xqc4jMnKFAA4zxniNRxugJTaPqqAOngAnkW9LLgpi9A7DYF_eq2wxm6JkI4FBhq4QYTTXrhs-ve0xt4-uRvRE5acA6jZrj0EBxsn-Wv9zSIAAzpaWmGY0N3cma5VoJQ4IrE?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0.0;10.0,100.0,9.0,27.0;100.0,28.0,0.0,80.0;20.0,100.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,100.0,21.0,33.0;0.0;100.0,28.0,0.0,80.0;0.0;5,5,5,3;1.0,0.584,0.584",
  },

  {
    id: 100,
    name: "Winter Soldier",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfS8jwITe-fVQLzgf9Q7dl0YA_vFdAgIYTe3CAimAj9qreq5_DwWwf6LYZq7GXXsa6UuFwKDjj2nWryERu2om-FnhqLUnA4orQVsVYy7LSvUb20ZbBBKZwwQKis6iA-A-OjSVhi?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfqFhdsL8fGHE7HiaiwYszTU5KGYiElLBv4eGHtjEsmtTAWfaOC6b-MpNFKPcbOGdo3ApFAO_wZumHcjqzkSJOy0geAa6x97maOi-cxkmoGi-FNYCYMyVPvQwccvPTIF5ZHjgM?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0.0;10.0,0.0,0.0,75.0;100.0,100.0,18.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,9.0,53.0,33.0;10.0;100.0,100.0,18.0,0.0;0.0;5,5,5,5;0.0,1.0,1.0",
  },

  {
    id: 99,
    name: "Namor",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeZJY49vyWoyWsCk6nfEd0OUtyCqzADuXZDgEbYlMwZLH7NqsCmee6nQKJ0tp-A2ZMDNAepjoabeiPcveqZsfpmS8F9Q_zjNe4OGlzqs0P7lvAsxh3HRnaOGRVnRto-5RlIiDo?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcUxfmG1ph7wBhgix8BcbU9gkstyg3NBpjMNHJJ_30KjbQnRVxW0pQAMIl2fvfqEkx1Ma700DXbNOfy_e-jPH8V89ov3fs7cq6Y2J6xBwv8dHuK0wMdSqktDEZ0mJ-9xWkqSok?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0;10.0,0.0,11.0,17.0;100.0,100.0,0.0,100.0;20.0,100.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,27.0,21.0,33.0;12.0;100.0,100.0,0.0,100.0;45.0;5.0,5.0,5.0,2.0;0.0,1.0,1.0",
  },

  {
    id: 98,
    name: "Psylocke",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXemh4lPJMQcfHJyKMHPVT9dzMG90NKrg0WSp4xosOKMnyLtbqGZfpiyM6qW1nmot2LJ5ttlxg7YC09Qr7UWU-PoL50Z1FPNupm3I3YaNdd5FSyrO2s-PAcKh2JE0esEG5S5zQt5?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeJJ9WpkkgrvlIwY9jDnelWoR64DJ8lzA8oGJ1t8w9gJNEvpW8tpg7ZnHLQ5ReHT4BpjLyt6lMucoFrPgioX_kove4BfjwItRfhT1Z3xYxlLzHOJVmFZSduJ_95WmLkXMRUSZ3L?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0.0;10.0,0.0,11.0,10.0;100.0,100.0,100.0,100.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,17.0,37.0,33.0;33.0;100.0,100.0,100.0,100.0;45.0;5,5,5,2;0.0,1.0,1.0",
  },

  {
    id: 97,
    name: "Mister Fantastic",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc6Vql1gl8hB9v5LwsR3GPsfaPah_aQZZlRxzvPis9FdieC_lXbfR_i5H8cca3wHMtct14xjJ5BS-0q5pCt1q_jX2RWEdnXaEGMtCK-mnDYu3gpcJr-67pVdYqYQru7Q_fb2wSN?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfR7rHKQUfvvPUKUhuBaZPM9QOr5oBy4S6kH4l_TxF0L05oKLhRzGVNuK6CIdiEVM2JKD9STQHPbaIK3fC9qWUSwivWBapL46rqSETga6fOalFGaHkxOE_G3UnQYGskoXkADuQ?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0.0;10.0,0.0,11.0,17.0;100.0,100.0,100.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,19.0,42.0,33.0;25.0;100.0,100.0,100.0,0.0;52.0;5,5,5,5;0.902,1.0,0.0",
  },

  {
    id: 96,
    name: "Luna Snow",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXftgNQCIpL4cfWWqO7ZSMN2KJCfXY1HM1O1h9KIK1MYCyrJVNNt-bjKr1P3gNE6bzm_kE_OVKiY6lIGt2GnAe7MlIDynNXMSEWlITls1ZoJlUJtcEgWE1JJStkpyDuE2axB6OJA?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXelHw54JbEiK7_5XH06cerPXhKfB7DZOvbjbPEaCIOmuKKxza8lZZ11xhLOb03OS0jemN6qdxTHr2JGI08HjBCDRl_HMGjonT2gLuNRx20ALBRU8c9UDgZJlyx9SLZK1gZLHtig?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0;10.0,17.0,11.0,17.0;100.0,100.0,0.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,11.0,21.0,33.0;25.0;100.0,100.0,0.0,0.0;0.0;5.0,0,0,0;1.0,1.0,0.902",
  },

  {
    id: 95,
    name: "Cloak and Dagger",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcwj3T76njoavh7SlxglLPNcsoI61PAExEA-2xWoVN63m4vl2FwYGeCayy16SYdy3Ykh2HFxUF92LMvTmUFIsqmDdG0dODlTqRKF-kTnlwUpc_rIoFgNTYn0e1QmI_2QiU0uK0R?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdMtu3kG31ojPF8fZUJIL86W6O4EqebOHejwksDGhVANt_iaAQF2H56AsgZvlEHeAgoZgaB4zeoR4OotqyYqBTPBng8ADbiMvw16BHW4tvN8aglkjwPhYChtDwVo5m1rcODFble?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0.0;10.0,0.0,0.0,17.0;100.0,100.0,29.0,0.0;20.0,0.0,100.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,100.0,62.0;33.0,8.0,100.0,33.0;7.000000000000001;100.0,100.0,29.0,0.0;0.0;5,3,5,2;1.0,1.0,1.0",
  },

  {
    id: 94,
    name: "Adam Warlock",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-fASt8uBnQWTTbmE0oEoStJizKzdhhdrEvj09xjmfiesgSDJH7KhscnylDHvthSbN8uh_kuZv9s8S6kDOQsrXQzwmjOG0aLpW7GvnWc015p0KsfBdk-r_IAHKU51ZXrZKCkA?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeV4m7TNZKlXWGiS4IVLGk9D19SOrftKld6WKUYxDeAqm4qy_F6Cu-7juU_JCT7vai9z-1pCSbyrgEffgXjTF9XvH7Gr0ch6OmHnnCw1_mnd6MDTneO229G7kovXNHoN6EWekHZ?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0;10.0,0.0,11.0,23.0;100.0,100.0,0.0,100.0;20.0,35.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,70.0,21.0,33.0;14.000000000000002;100.0,100.0,0.0,100.0;0.0;5.0,5,5.0,3;0.0,0.0,0.0",
  },
  {
    id: 93,
    name: "Invisible Woman",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXewumwpF-XML1cJ5nljCrBsYlLoGG5oEgyW23FyQEF1DuUFdV_zIXUt0InH0Up1UsoC4vvRWpST2YoZ7IfHc9AsGSORGJCkUUptrnQJXCIv6_8R1Lw_vRE05mPQyHrUY9611o5u?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwkpTpuGuyt63b2j_Al2Omu9bKkDHyYEM3OC758YoYrLveRabV8jKSIOjuhoGZ7YVbgjysaeKEgIzV5_YJpO2iPsAcF3FrLxv4Aw5JYpU-5l6uv832IwXlnhsxaZtFZJ5N7_Q?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0;10.0,15.0,11.0,17.0;100.0,100.0,0.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,23.0,43.0,33.0;20.0;100.0,100.0,0.0,0.0;0.0;5.0,0,0,0;1.0,0.941,0.0",
  },
  {
    id: 92,
    name: "Squirrel Girl",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfd4OsENhROSlPPb_31nOY9oArC0CjLRsyv5wmdw4yDIgHR84un5_gNgl91QxRpBJ668qOAlO3eGp8G_FLdj0GaIdhGEVF9tC0zzq8ptRS6eRQ6EKhl9ApqAVV8tYAGJDHSA9jo?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd31hOk1Iulrr0Ki4hT1-34Lmpw6kWF1-7eO-PUew_8xWAeOMB93saIz8H70vqqe6wyAPir4XTN8upMk9lNgyKJm0u9Lsq4zvtWIUB2J-m8Ze0bajpfBqb6UfA5oruC7Ja2V_8?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode: "Default",
  },
  {
    id: 91,
    name: "Jeff",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfMUb9bXYdGxgfJBgce1U6r-bZypzEPbYck-bROxFalfI7o1kxS9sTNcu8WL9vuoPL7LKwEaFVU2Dq9Z9fwGbFyh5bpuPKHqnBJ2K-_Nos5BURsob0mGhCkdrmBOX5TMHbQ2pBc?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd7Dj5GJul59o466OdY0i9SRQrJHsYDgZX3PWVIKvubZ-6DpAY9w5Tm3n90XmZ0hemhaDFhLVWgi5U-lkS6uwNsoPBisFr_07SjiVdeMUCX8pKduaRUpmI_NYrbtd9yFkuNlki4?key=-LQZ76nzaxVek-keEiFL4cZV",
    crosshairCode:
      "4;0;10.0,0.0,19.0,17.0;100.0,52.0,30.0,100.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,100.0,62.0;33.0,55.0,75.0,33.0;59.0;100.0,52.0,30.0,100.0;46.0;5.0,5,0,3;0.0,0.0,0.0",
  },
  {
    id: 80,
    name: "Emma frost",
    category: "Tank",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfS8zhW6g9uc9CffBMxmWaXawObTyZodBsYgSouLYOdEPuWshI77x7kBDN-FQ7KZyOaFbUrzXj6rlpdmIYMYdymtY8LijJq7tLBZI1Vl_qqAaEi_2vHEF_I-pLgRgWlZ-0zZJkq?key=stlux6wSCH7LoztErL9lOMdh",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcRey7EGfOqUzcpOUWytR8WDycwB0a3hTwLlF4l8wtSitr1ctEJQYCKn2KFMheGYAP0yVplG8_e2te9NH8v7uLP9fK13mwFaqhrrGh9S9e-0bFOe_-WZRsvgNrlBVZ5XLmdrZPt?key=stlux6wSCH7LoztErL9lOMdh",
    crosshairCode:
      "4;0.0;6.0,18.0,100.0,0.0;100.0,50.0,100.0,0.0;50.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,0.0;33.0,20.0,4.0,33.0;45.0;100.0,50.0,100.0,0.0;79.0;5,5,3,5;0.0,0.0,0.0",
  },

  {
    id: 25,
    name: "Mantis",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXchxVHAijeHjEVhq8gsdlSokCpIRwSPRLiQM5WDV-E_-wXJ04ONDa54qoMG3VImWUPTCccp8PRdxwlrNp2RxpnGdtzGCzBLTa-KHgDTODA7rzm78CxttnExMU0Iww4nolkmKto?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHpyEyAL0Q8Nad0nNo844THXwyuTTQk2WolIito04z91flJeFFAgDIinuqCayIO16V17QWrC-vcZqfr_uTttiPP4f2qGcl1RtbUDrmr45kMqSP8ZCb2CNDOkZ0zAJxMtF3BBLZ?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A telepath and empath who can control emotions.",
    crosshairCode:
      "4;0;9.0,12.0,11.0,0.0;100.0,50.0,100.0,100.0;51.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,0.0;0.0,17.0,20.0,0.0;37.0;100.0,50.0,100.0,100.0;49.0;5.0,0.0,4.0,5.0;1.0,0.941,0.0",
  },

  {
    id: 26,
    name: "Loki",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXclHPoL9W6WP_MZzMq1jFYKAvQxm-NrDjHPSMOyJUHK7WAMjong0ReMtdG7bEb-CBUViBo0tKpOIAxNsnELgKW2C9OXw-_GsOmlLZ_SDHLBcdcehnBM7qPA9fGmUYnYefYS6h0p?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKEuBEjGDnOuJbIfwh_h0C9vfV1WHU3LIfEKTZtSfDIwFPq70amCxEmdCc7RpeMFlkTGdL36-UqDi6ampwB2zBKx0igayFG-c00pLW3JEmCpZpz5pMvYwHjUoA0-rUsWj8p0Y?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A telepath and empath who can control emotions.",
    crosshairCode:
      "4;0;10.0,0.0,11.0,17.0;100.0,100.0,0.0,100.0;20.0,0.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,70.0,41.0,33.0;14.000000000000002;100.0,100.0,0.0,100.0;0.0;5.0,3,5.0,3;0.0,1.0,1.0",
  },

  {
    id: 33,
    name: "Hawkeye",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdgCcuZ4ZBtGB-Tdazzc8sGTTezqvOlojI7GD3VVyWw6_JpZytiHDlbWVq35E9gFd92K1R3LCm9v3r4fk8dAvcVNpkGIq_6K2GT1FGQCpYnoiIX4FXvkRmeEuzeBgzjtMxwfwfk?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYGkLg27KxO6ef10U_VQr8aVHw8qagKz-Lw2JnfVqmxmGEE7M4NSqSJHD88AhCJ-XMthOl6wWj5-m3HzJE58JTaoCPNCQ1mXPS_p2cADasQGOfn2mnMa3X8fWPEKOWxZUMXSI?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A master archer and member of the Avengers.",
    crosshairCode:
      "4;0.0;10.0,15.0,0.0,17.0;100.0,100.0,17.0,0.0;20.0,0.0,100.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,100.0,62.0;33.0,5.0,70.0,33.0;7.000000000000001;100.0,100.0,17.0,0.0;0.0;5,3,5,2;1.0,1.0,1.0",
  },

  {
    id: 35,
    name: "Star-Lord",
    category: "Duellist",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe0l0awk0U25ZEbheHf7OOzMw6p4WdE8hjOgZxuuFpxox6fcGuFAecmciuPxayD4YtNf1yUnWexw2bVRWKnEqPByc0CRQGpNmBHXYseuendBADKsY_EnA6Ct2poKRQayGq5lnCd?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfh255aemgEuahWvcf4mvWQfvyFR-LU0fxusjyz4nYSMa-EqR-Vhv1SRJMBcy9vhWrxVIBBfTBhj7BYbW6oYN4XA4pmy_VJ5aoXjmNgGKB8MYVJz2ucdS6uTKJgsY_IcnyKwJA?key=-LQZ76nzaxVek-keEiFL4cZV",
    description: "A leader of the Guardians of the Galaxy.",
    crosshairCode:
      "4;0.0;10.0,4.0,0.0,17.0;100.0,100.0,100.0,0.0;20.0,0.0,0.0,0.0;100.0,100.0,0.0,100.0;0.0,0.0,0.0,62.0;33.0,7.0,27.0,33.0;8.0;100.0,100.0,100.0,0.0;0.0;5,5,5,5;0.0,1.0,1.0",
  },
  {
    id: 36,
    name: "Rocket Raccoon",
    category: "Support",
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdfm9uRWNHdWcZ8Dra4MI9IiXKYGxWVg3a3uWeyH4ReDNZ0oSGrXQqGKTD2w13hKn3PEE1fwiHAqXk7-6yLAoJ7SeW2GuUt_SdLeaeQUlSvF1LHT4VVvvoagubI4rAKh5NB09bH?key=-LQZ76nzaxVek-keEiFL4cZV",
    image2:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc5dWdTznx3wNDTaUkwn6eXW1i_YzXyyrpAzWbs2Ii_-g94kbvYOfWwbusn4hWwh66J7PiYrtYAl9kSQtmy3fE1-eDNWnvhYFN5xdKSjF88t8lAqbtzRJ8FFJo0j89Fh1hrAL58?key=-LQZ76nzaxVek-keEiFL4cZV",
    description:
      "A genetically enhanced raccoon with a sharp mind and weapons.",
    crosshairCode:
      "4;0.0;10.0,0.0,48.0,9.0;100.0,100.0,100.0,0.0;20.0,100.0,0.0,0.0;100.0,100.0,100.0,100.0;0.0,0.0,0.0,62.0;33.0,38.0,0.0,33.0;14.000000000000002;100.0,100.0,100.0,0.0;0.0;5,5,5,2;0.0,1.0,1.0",
  },
];
export default characters;
