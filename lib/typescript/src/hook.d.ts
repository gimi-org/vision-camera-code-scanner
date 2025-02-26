import { Frame } from 'react-native-vision-camera';
import { Barcode, BarcodeFormat, CodeScannerOptions } from './common';
export declare function useScanBarcodes(types: BarcodeFormat[], options?: CodeScannerOptions): [(frame: Frame) => void, Barcode[]];
