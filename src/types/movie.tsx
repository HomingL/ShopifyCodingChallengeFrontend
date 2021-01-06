
// All movie related modal types
export type Maybe<T> = T | null;

export interface Movie {
  Title: string
  Year: string
  imdbID?: Maybe<string>
  Type?: Maybe<string>
  Poster ?: Maybe<string>
 };