export type ScanResult = 'Not a JEW' | 'Defo NOT a JEW' | 'JEW' | 'Defo a JEW' | null;

export interface ScanState {
  isLoading: boolean;
  result: ScanResult;
  error: string | null;
}
