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

| Function            | Spacer | Return value: number |
| ------------------- | ------ | -------------------- |
| getSpace(1, false)  | 1      | 4                    |
| getSpace(2, false)  | 2      | 8                    |
| getSpace(3, false)  | 3      | 16                   |
| getSpace(4, false)  | 4      | 20                   |
| getSpace(5, false)  | 5      | 24                   |
| getSpace(6, false)  | 6      | 32                   |
| getSpace(7, false)  | 7      | 48                   |
| getSpace(8, false)  | 8      | 64                   |
| getSpace(9, false)  | 9      | 96                   |
| getSpace(10, false) | 10     | 160                  |

---

| Function     | Spacer | Return value: string |
| ------------ | ------ | -------------------- |
| getSpace(1)  | 1      | "4px"                |
| getSpace(2)  | 2      | "8px"                |
| getSpace(3)  | 3      | "16px"               |
| getSpace(4)  | 4      | "20px"               |
| getSpace(5)  | 5      | "24px"               |
| getSpace(6)  | 6      | "32px"               |
| getSpace(7)  | 7      | "48px"               |
| getSpace(8)  | 8      | "64px"               |
| getSpace(9)  | 9      | "96px"               |
| getSpace(10) | 10     | "160px"              |

---

| Function   | Spacer | Return value: string |
| ---------- | ------ | -------------------- |
| getSpace() |        | "24px"               |
