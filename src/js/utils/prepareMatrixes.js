// for matrix convertation from wrong json (got from csv to json converter) to right one

import { RAW_RUB_LB } from "../constants/raw-matrixes/raw_rub_lb";
import { RAW_RUB_FULL } from "../constants/raw-matrixes/raw_rub_full.js";
import { RAW_RUB_NONE } from "../constants/raw-matrixes/raw_rub_none.js";
import { RAW_RUB_READY } from "../constants/raw-matrixes/raw_rub_ready.js";
import { RAW_RUB_REC } from "../constants/raw-matrixes/raw_rub_rec.js";
import { RAW_CUR_LB } from "../constants/raw-matrixes/raw_cur_lb.js";
import { RAW_CUR_FULL } from "../constants/raw-matrixes/raw_cur_full.js";
import { RAW_CUR_NONE } from "../constants/raw-matrixes/raw_cur_none.js";
import { RAW_CUR_READY } from "../constants/raw-matrixes/raw_cur_ready.js";
import { RAW_CUR_REC } from "../constants/raw-matrixes/raw_cur_rec.js";

import { matrixConverter } from "./matrixConverter.js";

const matrixNamesArray = [
  "MATRIX_CUR_FULL",
  "MATRIX_CUR_LB",
  "MATRIX_CUR_NONE",
  "MATRIX_CUR_READY",
  "MATRIX_CUR_REC",
  "MATRIX_RUB_FULL",
  "MATRIX_RUB_LB",
  "MATRIX_RUB_NONE",
  "MATRIX_RUB_READY",
  "MATRIX_RUB_REC",
];

export const prepareMatrixes = () => {
  [
    RAW_CUR_FULL,
    RAW_CUR_LB,
    RAW_CUR_NONE,
    RAW_CUR_READY,
    RAW_CUR_REC,
    RAW_RUB_FULL,
    RAW_RUB_LB,
    RAW_RUB_NONE,
    RAW_RUB_READY,
    RAW_RUB_REC,
  ].forEach((matrix, index) =>
    console.log(
      `export const ${matrixNamesArray[index]} =`,
      JSON.stringify(matrixConverter(matrix))
    )
  );
};
