// Data Obat Hipnotik

const dataHipnotik = {
  "Propofol": {
    kegunaan: {
      "Induksi": {
        rute: "-",
        dosis: "2 - 2.5 mg/kg",
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      "Maintenance": {
        rute: "-",
        dosis: "6 - 10 mg/kg/jam",
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      "Sedasi": {
        rute: "-",
        dosis: "25 - 100 μg/kg/mnt",
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
    },
  },
  "Thiopental": {
    kegunaan: {
      "Induksi": {
        rute: "-",
        dosis: "4 - 6 mg/kg",
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
      "Maintenance": {
        rute: "-",
        dosis: "1 - 3 mg/kg/jam",
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
      "Sedasi": {
        rute: "-",
        dosis: "1 - 3 mg/kg/jam",
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
    },
  },
  "Ketamin": {
    kegunaan: {
      "Induksi IV": {
        rute: "-",
        dosis: "1 - 3 mg/kg",
        OOA: "30s",
        DOA: "10 - 20 mnt",
      },
      "Intra Muskular": {
        rute: "-",
        dosis: "8 - 13 mg/kg",
        OOA: "30s",
        DOA: "10 - 20 mnt",
      },
    },
  },
};

const dataAnalgesik = {
  "Morfin": {
    kegunaan: {
      "Premedikasi": {
        rute: "Intra Muskuler",
        dosis: "0.05 - 0.2 mg/kg",
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
      "Intra Operasi": {
        rute: "Intra Vena",
        dosis: "0.1 - 1 mg/kg",
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
      "Post Operasi": {
        rute: {
          "Intra Muskuler": {
            dosis: "0.05 - 0.2 mg/kg",
            OOA: "5-10 mnt",
            DOA: "3-5 jam",
          },
          "Intra Vena": {
            dosis: "0.03 - 0.15 mg/kg",
            OOA: "5-10 mnt",
            DOA: "3-5 jam",
          },
        },
      },
    },
  },
  "Petidin": {
    kegunaan: {
      "Premedikasi": {
        rute: "Intra Muskuler",
        dosis: "0.5 - 1 mg/kg",
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
      "Intra Operatif": {
        rute: "Intra Vena",
        dosis: "2.5 - 5 mg/kg",
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
      "Post Operatif": {
        rute: {
          "Intra Muskuler": {
            dosis: "0.5 - 1 mg/kg",
            OOA: "5-10 mnt",
            DOA: "2-3 jam",
          },
          "Intra Vena": {
            dosis: "0.2 - 0.5 mg/kg",
            OOA: "5-10 mnt",
            DOA: "2-3 jam",
          },
        },
      },
    },
  },
  "Fentanyl": {
    kegunaan: {
      "Intra Operatif": {
        rute: "Intra Vena",
        dosis: "2 - 50 mcg/kg",
        OOA: "2 mnt",
        DOA: "45 mnt - 2 jam",
      },
      "Post Operatif": {
        rute: "Intra Vena",
        dosis: "0.5 - 1.5 mcg/kg",
        OOA: "2 mnt",
        DOA: "45 mnt - 2 jam",
      },
    },
  },
  "Sufetanil": {
    kegunaan: {
      "Analgesia": {
        rute: "Intra Muskuler / Intra Vena",
        dosis: "0.2 - 0.6 mcg/kg",
        OOA: "1 - 3 mnt",
        DOA: "IV: 20 - 45 mnt IM: 2 - 4 Jam",
      },
      "Induksi": {
        rute: "Intra Vena",
        dosis: "2 - 10 mcg/kg",
        OOA: "1 - 3 mnt",
        DOA: "IV: 20 - 45 mnt IM: 2 - 4 Jam",
      },
    },
  },
  "Alfetanil": {
    kegunaan: {
      "Analgesia": {
        rute: "Intra Muskuler / Intra Vena",
        dosis: "5 - 10 mcg/kg",
        OOA: "1 - 2 mnt",
        DOA: "1 - 2 Jam",
      },
      "Induksi": {
        rute: "Intra Vena",
        dosis: "50 - 300 mcg/kg",
        OOA: "1 - 2 mnt",
        DOA: "1 - 2 Jam",
      },
    },
  },
  "Remifeentanil": {
    kegunaan: {
      "Analgesia": {
        rute: "Intra Vena",
        dosis: "0.5 - 1.0 mg/kg",
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      "Induksi": {
        rute: "Intra Vena",
        dosis: "1 mcg/kg",
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
    },
  },
  "Buprenorphine": {
    kegunaan: {
      "Premedikasi": {
        rute: "Intra Vena",
        dosis: "400 mcg/kg",
        OOA: "30 mnt",
        DOA: "24 jam",
      },
      "Analgesia": {
        rute: "Intra Vena",
        dosis: "200 - 400 mcg/kg",
        OOA: "30 mnt",
        DOA: "24 jam",
      },
    },
  },
  "Hydromorphone": {
    kegunaan: {
      "Analgesia": {
        rute: {
          "Intra Vena": {
            dosis: "0.01 - 0.04 mg/kg",
            OOA: "15 - 30 mnt",
            DOA: "4 - 6 jam",
          },
          "Intra Muskuler": {
            dosis: "0.04 - 0.08 mg/kg",
            OOA: "15 - 30 mnt",
            DOA: "4 - 6 jam",
          },
        },
      },
      "Post Operatif": {
        rute: "Intra Vena",
        dosis: "2 - 10 mcg/kg",
        OOA: "15 - 30 mnt",
        DOA: "4 - 6 jam",
      },
    },
  },
  "Diamorphine": {
    kegunaan: {
      "Analgesia": {
        rute: "Intra Vena",
        dosis: "< 400 mg/injeksi",
        OOA: "2 - 3 mnt",
        DOA: "-",
      },
    },
  },
  "Tramadol": {
    kegunaan: {
      "Post Operatif": {
        rute: "Intra Vena",
        dosis: "50 - 100 mg/kg",
        OOA: "1 jam",
        DOA: "6 - 9 jam",
      },
    },
  },
};

const dataResusitasi = {
  Ephedrine: {
    kegunaan: {
      "Hipotensi/Bronkospasme": {
        rute: {
          "Intra Vena": {
            dosis: "5 - 20 mg",
            OOA: "2 - 5 mnt",
            DOA: "10 - 60 mnt",
          },
          "Intra Muskuler": {
            dosis: "25 - 50 mg",
            OOA: "< 10 mnt",
            DOA: "10 - 60 mnt",
          },
        },
      },
    },
  },
  "Sulfat Atropin": {
    kegunaan: {
      "Bradikardia Sinus": {
        rute: {
          "Intra Vena, Intra Muskuler": {
            dosis: {
              Dewasa: "0.5 - 1.0 mg",
              Anak: "10 - 20 mg/kg",
            },
          },
        },
        OOA: "45 - 60s",
        DOA: "1 - 2 jam",
      },
      Premedikasi: {
        rute: "Intra Vena, Intra Muskuler",
        dosis: "0.4 - 1.0 mg",
        OOA: "5 - 40 mnt",
        DOA: "1 - 2 jam",
      },
    },
  },
};

// Fungsi untuk menampilkan pilihan kegunaan berdasarkan obat yang dipilih
function tampilkanKegunaan() {
  const obatSelect = document.getElementById("obat");
  const kegunaanSelect = document.getElementById("kegunaan");
  const ruteSelect = document.getElementById("rute");

  // Bersihkan pilihan kegunaan dan rute
  kegunaanSelect.innerHTML = "<option value=''>Pilih Kegunaan</option>";
  ruteSelect.innerHTML = "<option value=''>Pilih Rute</option>";

  const selectedObat = obatSelect.value;
  const selectedDataHipnotik = dataHipnotik[selectedObat];
  const selectedDataAnalgesik = dataAnalgesik[selectedObat];
  const selectedDataResusitasi = dataResusitasi[selectedObat];

  // Tampilkan pilihan kegunaan
  if (selectedDataHipnotik) {
    Object.keys(selectedDataHipnotik.kegunaan).forEach((kegunaan) => {
      const option = document.createElement("option");
      option.text = kegunaan;
      kegunaanSelect.add(option);
    });
  } else if (selectedDataAnalgesik) {
    Object.keys(selectedDataAnalgesik.kegunaan).forEach((kegunaan) => {
      const option = document.createElement("option");
      option.text = kegunaan;
      kegunaanSelect.add(option);
    });
  } else if (selectedDataResusitasi) {
    Object.keys(selectedDataResusitasi.kegunaan).forEach((kegunaan) => {
      const option = document.createElement("option");
      option.text = kegunaan;
      kegunaanSelect.add(option);
    });
  }
}

// Fungsi untuk menampilkan pilihan rute berdasarkan kegunaan yang dipilih
function tampilkanRute() {
  const obatSelect = document.getElementById("obat");
  const kegunaanSelect = document.getElementById("kegunaan");
  const ruteSelect = document.getElementById("rute");

  const selectedObat = obatSelect.value;
  const selectedKegunaan = kegunaanSelect.value;

  const selectedDataHipnotik = dataHipnotik[selectedObat];
  const selectedDataAnalgesik = dataAnalgesik[selectedObat];
  const selectedDataResusitasi = dataResusitasi[selectedObat];

  // Bersihkan pilihan rute
  ruteSelect.innerHTML = "<option value=''>Pilih Rute</option>";

  // Tampilkan pilihan rute
  if (selectedDataHipnotik) {
    const selectedKegunaanData = selectedDataHipnotik.kegunaan[selectedKegunaan];
    const ruteData = selectedKegunaanData.rute;
    if (typeof ruteData === "object") {
      Object.keys(ruteData).forEach((rute) => {
        const option = document.createElement("option");
        option.text = rute;
        ruteSelect.add(option);
      });
    } else {
      const option = document.createElement("option");
      option.text = ruteData;
      ruteSelect.add(option);
    }
  } else if (selectedDataAnalgesik) {
    const selectedKegunaanData = selectedDataAnalgesik.kegunaan[selectedKegunaan];
    const ruteData = selectedKegunaanData.rute;
    if (typeof ruteData === "object") {
      Object.keys(ruteData).forEach((rute) => {
        const option = document.createElement("option");
        option.text = rute;
        ruteSelect.add(option);
      });
    } else {
      const option = document.createElement("option");
      option.text = ruteData;
      ruteSelect.add(option);
    }
  } else if (selectedDataResusitasi) {
    const selectedKegunaanData = selectedDataResusitasi.kegunaan[selectedKegunaan];
    const ruteData = selectedKegunaanData.rute;
    if (typeof ruteData === "object") {
      Object.keys(ruteData).forEach((rute) => {
        const option = document.createElement("option");
        option.text = rute;
        ruteSelect.add(option);
      });
    } else {
      const option = document.createElement("option");
      option.text = ruteData;
      ruteSelect.add(option);
    }
  }
}
