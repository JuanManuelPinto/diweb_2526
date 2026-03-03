# Tabla comparativa de formatos de audio

| Formato | Significado                   | Desarrollador                | Tipo de compresión        | Peculiaridades                                            |
| ------- | ----------------------------- | ---------------------------- | ------------------------- | --------------------------------------------------------- |
| WAV     | Waveform Audio File Format    | Microsoft / IBM              | Sin compresión            | Máxima calidad, archivos muy pesados, estándar en edición |
| AIFF    | Audio Interchange File Format | Apple Inc.                   | Sin compresión            | Equivalente a WAV en entornos Apple                       |
| MP3     | MPEG-1 Audio Layer III        | Fraunhofer IIS               | Con pérdida               | Muy compatible, excelente relación calidad/peso           |
| AAC     | Advanced Audio Coding         | Moving Picture Experts Group | Con pérdida               | Mejor calidad que MP3 a igual bitrate                     |
| OGG     | Ogg Vorbis                    | Xiph.Org Foundation          | Con pérdida               | Libre y sin patentes, muy usado en web                    |
| FLAC    | Free Lossless Audio Codec     | Xiph.Org Foundation          | Sin pérdida               | Alta calidad con reducción de tamaño (~50%)               |
| WMA     | Windows Media Audio           | Microsoft                    | Con pérdida / Sin pérdida | Integrado en Windows                                      |
| ALAC    | Apple Lossless Audio Codec    | Apple Inc.                   | Sin pérdida               | Alternativa a FLAC en ecosistema Apple                    |

# Conversión de WAV a MP3 optimizando tamaño y calidad

## Paso 1: Crear o descargar un archivo WAV

Puedes grabar audio con:

- Audacity  
- Grabadora de sonido del sistema  
- Cualquier editor de audio  

Al exportar, selecciona:

- **Formato:** WAV  
- **Codificación:** PCM  
- **Frecuencia de muestreo:** 44.1 kHz  
- **Profundidad:** 16 bits  

---

## Parámetros importantes

| Parámetro      | Efecto                                      |
|---------------|---------------------------------------------|
| `-b:a 320k`   | Máxima calidad MP3                         |
| `-b:a 192k`   | Muy buena calidad, tamaño reducido          |
| `-b:a 128k`   | Calidad aceptable, tamaño pequeño           |
| `-ac 1`       | Convierte a mono (reduce tamaño)            |
| `-ar 22050`   | Reduce frecuencia de muestreo               |

---

## Comando recomendado (equilibrio calidad / tamaño)

```bash
ffmpeg -i audio.wav -codec:a libmp3lame -b:a 192k -ar 44100 audio_final.mp3