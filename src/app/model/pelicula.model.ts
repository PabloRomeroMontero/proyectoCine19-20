import {LocalizacionModel} from './localizacion.model';

export class PeliculaModel {
  sinopsis: string;
  popularidad: number;
  votoPromedio: number;
  localizaciones: LocalizacionModel[];
  img: string;
  categoria: string;
}
