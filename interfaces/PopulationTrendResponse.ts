//test
export type PopulationTrendResponse = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
        rate?: number;
      }[];
    }[];
  };
};
