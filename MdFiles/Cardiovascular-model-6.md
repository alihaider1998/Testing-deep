---
title: 'Cardiovascular Model 6'
category: 'Cardiovascular'
subcategory: 'Sub Cardiovascular'
# subsubcategory: 'Subsub Cardiovascular'
desc: 'Some description of Cardiovascular Model 6.'
thumbnail: https://cdn.pixabay.com/photo/2020/04/22/19/29/heart-5079717__480.png
publication: https://ieeexplore.ieee.org/abstract/document/9462062
show: true
---

# Cardiovascular Model 6
Generate deepsynth-gitract images.  
![](https://cdn.pixabay.com/photo/2020/04/22/19/29/heart-5079717__480.png)

## Installation

Use the package manager [pip](https://pypi.org) to install deepsynth-gitract.



```bash
pip install deepsynth-gitract
```

## Usage

### Run on CPU (default setting)

```python
TBA - You have to have a NVIDIA GPU to run this package. We are working on CPU version.
```

### Run on GPU - generation process

```python
import deepsynth_gitract

deepsynth_gitract.generate(name, result_dir, checkpoint_dir, num_img_per_tile, num_of_outputs, trunc_psi=0.75):
    """ Generate deepsynth Gastrointestinal tract images.

    Keyword arguments:
    name -- Any name to keep trac of generations
    result_dir -- A directory to save output
    checkpoint_dir -- A directory to download pre-trained checkpoints
    num_img_per_tile -- Number of images per dimenstion of the grid
    num_of_outputs -- Number of outputs to generate
    trunc_psi -- value between 0.5 and 1.0 (default 0.75)
    """
```

### Run on GPU - to generate interpolations between random points

```python
deepsynth_gitract.generate_interpolation(name, result_dir, checkpoint_dir, num_img_per_tile, num_of_outputs, num_of_steps_to_interpolate, save_frames, trunc_psi=0.75):
    """ Generate deepsynth Gastrointestinal tract images.

    Keyword arguments:
    name -- Any name to keep trac of generations
    result_dir -- A directory to save output
    checkpoint_dir -- A directory to download pre-trained checkpoints
    num_img_per_tile -- Number of images per dimenstion of the grid
    num_of_outputs -- Number of outputs to generate
    num_of_steps_to_interpolate -- Number of step between two random points
    save_frames -- True if you want frame by frame, otherwise .gif will be generated
    trunc_psi -- value between 0.5 and 1.0 (default 0.75)
    """
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## For more details: 
Please contact: vajira@simula.no, michael@simula.no

## License
[MIT](https://choosealicense.com/licenses/mit/)