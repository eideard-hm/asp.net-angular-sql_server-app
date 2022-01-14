export interface Inspection {
  id: number,
  status: string,
  comments: string,
  inspectionTypeId: number,
  inspectionType?: {
    id: number,
    inspectionName: string
  }
}
