## What is it?

Package for getting space for margin or padding.

## Installation

Run `npm i spacer_m_p` or `yarn add spacer_m_p`

## Use

import getSpace from "spacer_m_p";

- Option 1: **getSpace(1)** returns **4px** (string);
- Option 2: **getSpace(1, false)** returns **4** (number);
- Option 3: **getSpace()** returns **24px** (string);

## Parameters

The function accepts two parameters, spacer (number) and withPx (boolean);

By default **getSpace()** returns **24px** (string);

#### Spacings, which function may accept and values, which will be returned:

- 1 => 4
- 2 => 8
- 3 => 16
- 4 => 20
- 5 => 24
- 6 => 32
- 7 => 48
- 8 => 64
- 9 => 96
- 10 => 160
