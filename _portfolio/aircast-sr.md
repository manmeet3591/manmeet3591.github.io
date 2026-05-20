---
title: "AiRCast-SR: Kilometer-Scale Atmospheric Super-Resolution via Latent Consistency Diffusion"
excerpt: "Translating coarse-resolution (0.25°) global weather model outputs into high-fidelity kilometer-scale (1 km) gridded analyses over CONUS and beyond.<br/><img src='/images/aircast_sr_schematic.jpg'>"
collection: portfolio
---

## Overview

**AiRCast-SR** is a generative atmospheric super-resolution framework that translates coarse-resolution (25 km) global weather forecasts into kilometer-scale (1 km) gridded analyses. Built on a 3-D UNet conditioned with a Latent Consistency Model (LCM) scheduler, AiRCast-SR produces high-fidelity multi-variable predictions at a fraction of the computational cost of conventional diffusion models or numerical weather prediction.

## Key Features

- **High Resolution:** 1 km horizontal and 1 hour temporal resolution.
- **Multi-Variable:** Simultaneously predicts 7 near-surface variables including precipitation, temperature, wind, and radiation.
- **Efficiency:** Uses Latent Consistency Diffusion for rapid inference, making kilometer-scale forecasting practical on commodity hardware.
- **Global Capability:** A "foundation model" approach with patch-based training that enables zero-shot deployment over arbitrary global geographic domains.

## Architecture

The system utilizes a 3D U-Net neural network architecture conditioned within a Latent Consistency Model (LCM) diffusion framework. It ingests 20 conditioning channels — 17 from coarse global models plus static terrain and solar geometry — to generate physically realistic fine-scale atmospheric structural realism.

![AiRCast-SR Schematic](/images/aircast_sr_schematic.jpg)

## Resources

- [**Download Full Paper (PDF)**](/files/aircast_sr_arxiv.pdf)
- [**GitHub Repository**](https://github.com/shreesomnath/AiRCast_highres)
