---
title: "AVIF image format"
description: "A modern image format based on the AV1 video format."
category: image
keywords: image,img,AVIF
tags: performance
last_test_date: "2021-05-14"
test_url: "/tests/images.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/d69Dg0BGvV5zAiHI1fjKX6BDulsODM8eYdKO9QVxlNuUL/list"
stats: {
  apple-mail: {
    macos: {
      "11": "n",
      "12": "n",
      "13": "n",
      "13.1": "y #2"
    },
    ios: {
      "11": "n",
      "12": "n",
      "13": "n",
      "14": "n",
      "16.2": "y #2"
    }
  },
  gmail: {
    desktop-webmail: {
      "2021-01": "n",
      "2023-01": "y #3"
    },
    ios: {
      "2021-01": "n",
      "2023-01": "y #3"
    },
    android: {
      "2021-01": "n"
    },
    mobile-webmail: {
      "2021-01": "n",
      "2023-01": "y #3"
    }
  },
  orange: {
    desktop-webmail: {
      "2021-01":"y #1"
    },
    ios: {
      "2021-01":"n"
    },
    android: {
      "2021-05":"y"
    }
  },
  outlook: {
    windows: {
      "2007": "n",
      "2010": "n",
      "2013": "n",
      "2016": "n",
      "2019": "n"
    },
    windows-mail: {
      "2021-01": "n"
    },
    macos: {
      "2021-01": "n",
      "2023-01": "y #2"
    },
    outlook-com: {
      "2021-01": "y #1"
    },
    ios: {
      "2021-01": "n",
      "2023-01": "y #2"
    },
    android: {
      "4.2116.0": "y #1"
    }
  },
  yahoo: {
    desktop-webmail: {
      "2021-01": "y #1"
    },
    ios: {
      "2021-01": "n",
      "2023-01": "y #2"
    },
    android: {
      "6.27": "y #1"
    }
  },
  aol: {
    desktop-webmail: {
      "2021-01": "y #1"
    },
    ios: {
      "2021-01": "n",
      "2023-01": "y #2"
    },
    android: {
      "2021-05": "y #1"
    }
  },
  samsung-email: {
    android: {
      "6.1.31.2": "n"
    }
  },
  sfr: {
    desktop-webmail: {
      "2021-01":"y #1"
    },
    ios: {
      "2021-01":"n"
    },
    android: {
      "2021-05":"y #1"
    }
  },
  thunderbird: {
    macos: {
      "78.10": "n",
      "102.6": "y #2"
    }
  },
  protonmail: {
    desktop-webmail: {
      "2021-01":"y #1"
    },
    ios: {
      "2021-05":"n",
      "2023-01":"n"
    },
    android: {
      "2021-01":"y #1"
    }
  },
  hey: {
    desktop-webmail: {
      "2021-05":"n"
    }
  },
  mail-ru: {
    desktop-webmail: {
      "2021-01":"n",
      "2023-01":"n"
    }
  },
  fastmail: {
    desktop-webmail: {
      "2021-07": "n",
      "2023-01": "n"
    }
  },
  laposte: {
    desktop-webmail: {
      "2021-08": "y"
    }
  },
  gmx: {
    desktop-webmail: {
        "2022-09": "n"
    },
    ios: {
        "2022-09":"n"
    },
    android: {
        "2022-09":"n"
    }
  },
  web-de: {
    desktop-webmail: {
        "2022-09": "n"
    },
    ios: {
        "2022-09":"n"
    },
    android: {
        "2022-09":"n"
    }
  },
  ionos-1and1: {
    desktop-webmail: {
        "2022-09": "n"
    },
    android: {
        "2022-09":"n"
    }
  }
}
notes_by_num: {
  "1": "Support depends on browser and operating system support.",
  "2": "Does not support animated AVIF.",
  "3": "Converts still AVIF into a jpg and animated AVIF into a gif."
}
links: {
  "Can I use: AVIF image format":"https://caniuse.com/avif",
  "MDN: Image file type and format guide":"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types",
  "avif.io: a free AVIF converter by Justin Schmitz and Niksa Sporin":"https://avif.io/"
}
---