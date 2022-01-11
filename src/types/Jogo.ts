export type Jogo = {
   id: number;
   dataJogo: Date;
   cartelas: String[];
   bolasChamadas: number[];
   numeroBolasChamadas: number;
   primeiraBolaChamada: number;
   ultimaBolaChamada: number;
   numeroBolasChamadasAoArmar: number;
   quantidadeImpares: number;
   quantidadePares: number;
   cartelasArmadas: String[];
   cartelasBatidas: String[];
}