
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Books
 * 
 */
export type Books = $Result.DefaultSelection<Prisma.$BooksPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Profiles
 * 
 */
export type Profiles = $Result.DefaultSelection<Prisma.$ProfilesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Borrowings
 * 
 */
export type Borrowings = $Result.DefaultSelection<Prisma.$BorrowingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **Books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.BooksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **Profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.ProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrowings`: Exposes CRUD operations for the **Borrowings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Borrowings
    * const borrowings = await prisma.borrowings.findMany()
    * ```
    */
  get borrowings(): Prisma.BorrowingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Books: 'Books',
    Review: 'Review',
    Profiles: 'Profiles',
    Categories: 'Categories',
    Borrowings: 'Borrowings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "books" | "review" | "profiles" | "categories" | "borrowings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Books: {
        payload: Prisma.$BooksPayload<ExtArgs>
        fields: Prisma.BooksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BooksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BooksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findFirst: {
            args: Prisma.BooksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BooksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findMany: {
            args: Prisma.BooksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          create: {
            args: Prisma.BooksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          createMany: {
            args: Prisma.BooksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BooksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          delete: {
            args: Prisma.BooksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          update: {
            args: Prisma.BooksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          deleteMany: {
            args: Prisma.BooksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BooksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BooksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          upsert: {
            args: Prisma.BooksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.BooksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BooksCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Profiles: {
        payload: Prisma.$ProfilesPayload<ExtArgs>
        fields: Prisma.ProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findFirst: {
            args: Prisma.ProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findMany: {
            args: Prisma.ProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          create: {
            args: Prisma.ProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          createMany: {
            args: Prisma.ProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          delete: {
            args: Prisma.ProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          update: {
            args: Prisma.ProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          deleteMany: {
            args: Prisma.ProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          upsert: {
            args: Prisma.ProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.ProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Borrowings: {
        payload: Prisma.$BorrowingsPayload<ExtArgs>
        fields: Prisma.BorrowingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>
          }
          findFirst: {
            args: Prisma.BorrowingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>
          }
          findMany: {
            args: Prisma.BorrowingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>[]
          }
          create: {
            args: Prisma.BorrowingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>
          }
          createMany: {
            args: Prisma.BorrowingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BorrowingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>[]
          }
          delete: {
            args: Prisma.BorrowingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>
          }
          update: {
            args: Prisma.BorrowingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>
          }
          deleteMany: {
            args: Prisma.BorrowingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BorrowingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>[]
          }
          upsert: {
            args: Prisma.BorrowingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingsPayload>
          }
          aggregate: {
            args: Prisma.BorrowingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowings>
          }
          groupBy: {
            args: Prisma.BorrowingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowingsCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    books?: BooksOmit
    review?: ReviewOmit
    profiles?: ProfilesOmit
    categories?: CategoriesOmit
    borrowings?: BorrowingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    borrowings: number
    reviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowings?: boolean | UsersCountOutputTypeCountBorrowingsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBorrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    borrowings: number
    reviews: number
  }

  export type BooksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowings?: boolean | BooksCountOutputTypeCountBorrowingsArgs
    reviews?: boolean | BooksCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountBorrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowingsWhereInput
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    books: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | CategoriesCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    profiles?: boolean | Users$profilesArgs<ExtArgs>
    borrowings?: boolean | Users$borrowingsArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | Users$profilesArgs<ExtArgs>
    borrowings?: boolean | Users$borrowingsArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      profiles: Prisma.$ProfilesPayload<ExtArgs> | null
      borrowings: Prisma.$BorrowingsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends Users$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Users$profilesArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    borrowings<T extends Users$borrowingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$borrowingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.profiles
   */
  export type Users$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    where?: ProfilesWhereInput
  }

  /**
   * Users.borrowings
   */
  export type Users$borrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    where?: BorrowingsWhereInput
    orderBy?: BorrowingsOrderByWithRelationInput | BorrowingsOrderByWithRelationInput[]
    cursor?: BorrowingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowingsScalarFieldEnum | BorrowingsScalarFieldEnum[]
  }

  /**
   * Users.reviews
   */
  export type Users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    id: number | null
    year: number | null
    stock: number | null
    categoryId: number | null
  }

  export type BooksSumAggregateOutputType = {
    id: number | null
    year: number | null
    stock: number | null
    categoryId: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    year: number | null
    stock: number | null
    cloudinaryId: string | null
    createdAt: Date | null
    categoryId: number | null
  }

  export type BooksMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    year: number | null
    stock: number | null
    cloudinaryId: string | null
    createdAt: Date | null
    categoryId: number | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    title: number
    author: number
    year: number
    stock: number
    cloudinaryId: number
    createdAt: number
    categoryId: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    id?: true
    year?: true
    stock?: true
    categoryId?: true
  }

  export type BooksSumAggregateInputType = {
    id?: true
    year?: true
    stock?: true
    categoryId?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    year?: true
    stock?: true
    cloudinaryId?: true
    createdAt?: true
    categoryId?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    year?: true
    stock?: true
    cloudinaryId?: true
    createdAt?: true
    categoryId?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    year?: true
    stock?: true
    cloudinaryId?: true
    createdAt?: true
    categoryId?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to aggregate.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type BooksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithAggregationInput | BooksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: BooksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    id: number
    title: string
    author: string
    year: number
    stock: number
    cloudinaryId: string | null
    createdAt: Date
    categoryId: number | null
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends BooksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type BooksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    year?: boolean
    stock?: boolean
    cloudinaryId?: boolean
    createdAt?: boolean
    categoryId?: boolean
    categories?: boolean | Books$categoriesArgs<ExtArgs>
    borrowings?: boolean | Books$borrowingsArgs<ExtArgs>
    reviews?: boolean | Books$reviewsArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    year?: boolean
    stock?: boolean
    cloudinaryId?: boolean
    createdAt?: boolean
    categoryId?: boolean
    categories?: boolean | Books$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    year?: boolean
    stock?: boolean
    cloudinaryId?: boolean
    createdAt?: boolean
    categoryId?: boolean
    categories?: boolean | Books$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    year?: boolean
    stock?: boolean
    cloudinaryId?: boolean
    createdAt?: boolean
    categoryId?: boolean
  }

  export type BooksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "year" | "stock" | "cloudinaryId" | "createdAt" | "categoryId", ExtArgs["result"]["books"]>
  export type BooksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Books$categoriesArgs<ExtArgs>
    borrowings?: boolean | Books$borrowingsArgs<ExtArgs>
    reviews?: boolean | Books$reviewsArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BooksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Books$categoriesArgs<ExtArgs>
  }
  export type BooksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Books$categoriesArgs<ExtArgs>
  }

  export type $BooksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Books"
    objects: {
      categories: Prisma.$CategoriesPayload<ExtArgs> | null
      borrowings: Prisma.$BorrowingsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      author: string
      year: number
      stock: number
      cloudinaryId: string | null
      createdAt: Date
      categoryId: number | null
    }, ExtArgs["result"]["books"]>
    composites: {}
  }

  type BooksGetPayload<S extends boolean | null | undefined | BooksDefaultArgs> = $Result.GetResult<Prisma.$BooksPayload, S>

  type BooksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BooksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface BooksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Books'], meta: { name: 'Books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {BooksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksFindUniqueArgs>(args: SelectSubset<T, BooksFindUniqueArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksFindUniqueOrThrowArgs>(args: SelectSubset<T, BooksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksFindFirstArgs>(args?: SelectSubset<T, BooksFindFirstArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksFindFirstOrThrowArgs>(args?: SelectSubset<T, BooksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BooksFindManyArgs>(args?: SelectSubset<T, BooksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books.
     * @param {BooksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
     */
    create<T extends BooksCreateArgs>(args: SelectSubset<T, BooksCreateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BooksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BooksCreateManyArgs>(args?: SelectSubset<T, BooksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BooksCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BooksCreateManyAndReturnArgs>(args?: SelectSubset<T, BooksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Books.
     * @param {BooksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
     */
    delete<T extends BooksDeleteArgs>(args: SelectSubset<T, BooksDeleteArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books.
     * @param {BooksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BooksUpdateArgs>(args: SelectSubset<T, BooksUpdateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BooksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BooksDeleteManyArgs>(args?: SelectSubset<T, BooksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BooksUpdateManyArgs>(args: SelectSubset<T, BooksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BooksUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BooksUpdateManyAndReturnArgs>(args: SelectSubset<T, BooksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Books.
     * @param {BooksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends BooksUpsertArgs>(args: SelectSubset<T, BooksUpsertArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BooksCountArgs>(
      args?: Subset<T, BooksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksGroupByArgs['orderBy'] }
        : { orderBy?: BooksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Books model
   */
  readonly fields: BooksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Books$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Books$categoriesArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    borrowings<T extends Books$borrowingsArgs<ExtArgs> = {}>(args?: Subset<T, Books$borrowingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Books$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Books$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Books model
   */
  interface BooksFieldRefs {
    readonly id: FieldRef<"Books", 'Int'>
    readonly title: FieldRef<"Books", 'String'>
    readonly author: FieldRef<"Books", 'String'>
    readonly year: FieldRef<"Books", 'Int'>
    readonly stock: FieldRef<"Books", 'Int'>
    readonly cloudinaryId: FieldRef<"Books", 'String'>
    readonly createdAt: FieldRef<"Books", 'DateTime'>
    readonly categoryId: FieldRef<"Books", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Books findUnique
   */
  export type BooksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findUniqueOrThrow
   */
  export type BooksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findFirst
   */
  export type BooksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findFirstOrThrow
   */
  export type BooksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findMany
   */
  export type BooksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books create
   */
  export type BooksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to create a Books.
     */
    data: XOR<BooksCreateInput, BooksUncheckedCreateInput>
  }

  /**
   * Books createMany
   */
  export type BooksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Books createManyAndReturn
   */
  export type BooksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Books update
   */
  export type BooksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to update a Books.
     */
    data: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
    /**
     * Choose, which Books to update.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books updateMany
   */
  export type BooksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Books updateManyAndReturn
   */
  export type BooksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Books upsert
   */
  export type BooksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The filter to search for the Books to update in case it exists.
     */
    where: BooksWhereUniqueInput
    /**
     * In case the Books found by the `where` argument doesn't exist, create a new Books with this data.
     */
    create: XOR<BooksCreateInput, BooksUncheckedCreateInput>
    /**
     * In case the Books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
  }

  /**
   * Books delete
   */
  export type BooksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter which Books to delete.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books deleteMany
   */
  export type BooksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Books.categories
   */
  export type Books$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * Books.borrowings
   */
  export type Books$borrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    where?: BorrowingsWhereInput
    orderBy?: BorrowingsOrderByWithRelationInput | BorrowingsOrderByWithRelationInput[]
    cursor?: BorrowingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowingsScalarFieldEnum | BorrowingsScalarFieldEnum[]
  }

  /**
   * Books.reviews
   */
  export type Books$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Books without action
   */
  export type BooksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    bookId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    bookId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    bookId: number | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    bookId: number | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    userId: number
    bookId: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    bookId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    bookId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    bookId?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string
    userId: number
    bookId: number
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "userId" | "bookId" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      book: Prisma.$BooksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string
      userId: number
      bookId: number
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksDefaultArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly bookId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    address: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    address: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    userId: number
    address: number
    phone: number
    createdAt: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfilesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    phone?: true
    createdAt?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    phone?: true
    createdAt?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to aggregate.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithAggregationInput | ProfilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: ProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: number
    userId: number
    address: string | null
    phone: string | null
    createdAt: Date
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type ProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectScalar = {
    id?: boolean
    userId?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type ProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "address" | "phone" | "createdAt", ExtArgs["result"]["profiles"]>
  export type ProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profiles"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      address: string | null
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type ProfilesGetPayload<S extends boolean | null | undefined | ProfilesDefaultArgs> = $Result.GetResult<Prisma.$ProfilesPayload, S>

  type ProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface ProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profiles'], meta: { name: 'Profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {ProfilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilesFindUniqueArgs>(args: SelectSubset<T, ProfilesFindUniqueArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilesFindFirstArgs>(args?: SelectSubset<T, ProfilesFindFirstArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilesFindManyArgs>(args?: SelectSubset<T, ProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {ProfilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends ProfilesCreateArgs>(args: SelectSubset<T, ProfilesCreateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilesCreateManyArgs>(args?: SelectSubset<T, ProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {ProfilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends ProfilesDeleteArgs>(args: SelectSubset<T, ProfilesDeleteArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {ProfilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilesUpdateArgs>(args: SelectSubset<T, ProfilesUpdateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilesDeleteManyArgs>(args?: SelectSubset<T, ProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilesUpdateManyArgs>(args: SelectSubset<T, ProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {ProfilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends ProfilesUpsertArgs>(args: SelectSubset<T, ProfilesUpsertArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfilesCountArgs>(
      args?: Subset<T, ProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profiles model
   */
  readonly fields: ProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profiles model
   */
  interface ProfilesFieldRefs {
    readonly id: FieldRef<"Profiles", 'Int'>
    readonly userId: FieldRef<"Profiles", 'Int'>
    readonly address: FieldRef<"Profiles", 'String'>
    readonly phone: FieldRef<"Profiles", 'String'>
    readonly createdAt: FieldRef<"Profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profiles findUnique
   */
  export type ProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findUniqueOrThrow
   */
  export type ProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findFirst
   */
  export type ProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findFirstOrThrow
   */
  export type ProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findMany
   */
  export type ProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles create
   */
  export type ProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Profiles.
     */
    data: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
  }

  /**
   * Profiles createMany
   */
  export type ProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles createManyAndReturn
   */
  export type ProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles update
   */
  export type ProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Profiles.
     */
    data: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
    /**
     * Choose, which Profiles to update.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles updateMany
   */
  export type ProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profiles updateManyAndReturn
   */
  export type ProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles upsert
   */
  export type ProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Profiles to update in case it exists.
     */
    where: ProfilesWhereUniqueInput
    /**
     * In case the Profiles found by the `where` argument doesn't exist, create a new Profiles with this data.
     */
    create: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
    /**
     * In case the Profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
  }

  /**
   * Profiles delete
   */
  export type ProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter which Profiles to delete.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles deleteMany
   */
  export type ProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profiles without action
   */
  export type ProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    books?: boolean | Categories$booksArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    createAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Categories$booksArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      books: Prisma.$BooksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Categories$booksArgs<ExtArgs> = {}>(args?: Subset<T, Categories$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly createAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.books
   */
  export type Categories$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    cursor?: BooksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Borrowings
   */

  export type AggregateBorrowings = {
    _count: BorrowingsCountAggregateOutputType | null
    _avg: BorrowingsAvgAggregateOutputType | null
    _sum: BorrowingsSumAggregateOutputType | null
    _min: BorrowingsMinAggregateOutputType | null
    _max: BorrowingsMaxAggregateOutputType | null
  }

  export type BorrowingsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type BorrowingsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type BorrowingsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    borrow_date: Date | null
    returned_at: Date | null
    createdAt: Date | null
  }

  export type BorrowingsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    borrow_date: Date | null
    returned_at: Date | null
    createdAt: Date | null
  }

  export type BorrowingsCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    borrow_date: number
    returned_at: number
    createdAt: number
    _all: number
  }


  export type BorrowingsAvgAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type BorrowingsSumAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type BorrowingsMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    borrow_date?: true
    returned_at?: true
    createdAt?: true
  }

  export type BorrowingsMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    borrow_date?: true
    returned_at?: true
    createdAt?: true
  }

  export type BorrowingsCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    borrow_date?: true
    returned_at?: true
    createdAt?: true
    _all?: true
  }

  export type BorrowingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrowings to aggregate.
     */
    where?: BorrowingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingsOrderByWithRelationInput | BorrowingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Borrowings
    **/
    _count?: true | BorrowingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowingsMaxAggregateInputType
  }

  export type GetBorrowingsAggregateType<T extends BorrowingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowings[P]>
      : GetScalarType<T[P], AggregateBorrowings[P]>
  }




  export type BorrowingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowingsWhereInput
    orderBy?: BorrowingsOrderByWithAggregationInput | BorrowingsOrderByWithAggregationInput[]
    by: BorrowingsScalarFieldEnum[] | BorrowingsScalarFieldEnum
    having?: BorrowingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowingsCountAggregateInputType | true
    _avg?: BorrowingsAvgAggregateInputType
    _sum?: BorrowingsSumAggregateInputType
    _min?: BorrowingsMinAggregateInputType
    _max?: BorrowingsMaxAggregateInputType
  }

  export type BorrowingsGroupByOutputType = {
    id: number
    userId: number
    bookId: number
    borrow_date: Date
    returned_at: Date | null
    createdAt: Date
    _count: BorrowingsCountAggregateOutputType | null
    _avg: BorrowingsAvgAggregateOutputType | null
    _sum: BorrowingsSumAggregateOutputType | null
    _min: BorrowingsMinAggregateOutputType | null
    _max: BorrowingsMaxAggregateOutputType | null
  }

  type GetBorrowingsGroupByPayload<T extends BorrowingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowingsGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowingsGroupByOutputType[P]>
        }
      >
    >


  export type BorrowingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    borrow_date?: boolean
    returned_at?: boolean
    createdAt?: boolean
    borrower?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowings"]>

  export type BorrowingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    borrow_date?: boolean
    returned_at?: boolean
    createdAt?: boolean
    borrower?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowings"]>

  export type BorrowingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    borrow_date?: boolean
    returned_at?: boolean
    createdAt?: boolean
    borrower?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowings"]>

  export type BorrowingsSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    borrow_date?: boolean
    returned_at?: boolean
    createdAt?: boolean
  }

  export type BorrowingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId" | "borrow_date" | "returned_at" | "createdAt", ExtArgs["result"]["borrowings"]>
  export type BorrowingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }
  export type BorrowingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }
  export type BorrowingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | UsersDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }

  export type $BorrowingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Borrowings"
    objects: {
      borrower: Prisma.$UsersPayload<ExtArgs>
      book: Prisma.$BooksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bookId: number
      borrow_date: Date
      returned_at: Date | null
      createdAt: Date
    }, ExtArgs["result"]["borrowings"]>
    composites: {}
  }

  type BorrowingsGetPayload<S extends boolean | null | undefined | BorrowingsDefaultArgs> = $Result.GetResult<Prisma.$BorrowingsPayload, S>

  type BorrowingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BorrowingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowingsCountAggregateInputType | true
    }

  export interface BorrowingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Borrowings'], meta: { name: 'Borrowings' } }
    /**
     * Find zero or one Borrowings that matches the filter.
     * @param {BorrowingsFindUniqueArgs} args - Arguments to find a Borrowings
     * @example
     * // Get one Borrowings
     * const borrowings = await prisma.borrowings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowingsFindUniqueArgs>(args: SelectSubset<T, BorrowingsFindUniqueArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Borrowings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowingsFindUniqueOrThrowArgs} args - Arguments to find a Borrowings
     * @example
     * // Get one Borrowings
     * const borrowings = await prisma.borrowings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrowings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingsFindFirstArgs} args - Arguments to find a Borrowings
     * @example
     * // Get one Borrowings
     * const borrowings = await prisma.borrowings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowingsFindFirstArgs>(args?: SelectSubset<T, BorrowingsFindFirstArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrowings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingsFindFirstOrThrowArgs} args - Arguments to find a Borrowings
     * @example
     * // Get one Borrowings
     * const borrowings = await prisma.borrowings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Borrowings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Borrowings
     * const borrowings = await prisma.borrowings.findMany()
     * 
     * // Get first 10 Borrowings
     * const borrowings = await prisma.borrowings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borrowingsWithIdOnly = await prisma.borrowings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BorrowingsFindManyArgs>(args?: SelectSubset<T, BorrowingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Borrowings.
     * @param {BorrowingsCreateArgs} args - Arguments to create a Borrowings.
     * @example
     * // Create one Borrowings
     * const Borrowings = await prisma.borrowings.create({
     *   data: {
     *     // ... data to create a Borrowings
     *   }
     * })
     * 
     */
    create<T extends BorrowingsCreateArgs>(args: SelectSubset<T, BorrowingsCreateArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Borrowings.
     * @param {BorrowingsCreateManyArgs} args - Arguments to create many Borrowings.
     * @example
     * // Create many Borrowings
     * const borrowings = await prisma.borrowings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowingsCreateManyArgs>(args?: SelectSubset<T, BorrowingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Borrowings and returns the data saved in the database.
     * @param {BorrowingsCreateManyAndReturnArgs} args - Arguments to create many Borrowings.
     * @example
     * // Create many Borrowings
     * const borrowings = await prisma.borrowings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Borrowings and only return the `id`
     * const borrowingsWithIdOnly = await prisma.borrowings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BorrowingsCreateManyAndReturnArgs>(args?: SelectSubset<T, BorrowingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Borrowings.
     * @param {BorrowingsDeleteArgs} args - Arguments to delete one Borrowings.
     * @example
     * // Delete one Borrowings
     * const Borrowings = await prisma.borrowings.delete({
     *   where: {
     *     // ... filter to delete one Borrowings
     *   }
     * })
     * 
     */
    delete<T extends BorrowingsDeleteArgs>(args: SelectSubset<T, BorrowingsDeleteArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Borrowings.
     * @param {BorrowingsUpdateArgs} args - Arguments to update one Borrowings.
     * @example
     * // Update one Borrowings
     * const borrowings = await prisma.borrowings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowingsUpdateArgs>(args: SelectSubset<T, BorrowingsUpdateArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Borrowings.
     * @param {BorrowingsDeleteManyArgs} args - Arguments to filter Borrowings to delete.
     * @example
     * // Delete a few Borrowings
     * const { count } = await prisma.borrowings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowingsDeleteManyArgs>(args?: SelectSubset<T, BorrowingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Borrowings
     * const borrowings = await prisma.borrowings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowingsUpdateManyArgs>(args: SelectSubset<T, BorrowingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrowings and returns the data updated in the database.
     * @param {BorrowingsUpdateManyAndReturnArgs} args - Arguments to update many Borrowings.
     * @example
     * // Update many Borrowings
     * const borrowings = await prisma.borrowings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Borrowings and only return the `id`
     * const borrowingsWithIdOnly = await prisma.borrowings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BorrowingsUpdateManyAndReturnArgs>(args: SelectSubset<T, BorrowingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Borrowings.
     * @param {BorrowingsUpsertArgs} args - Arguments to update or create a Borrowings.
     * @example
     * // Update or create a Borrowings
     * const borrowings = await prisma.borrowings.upsert({
     *   create: {
     *     // ... data to create a Borrowings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Borrowings we want to update
     *   }
     * })
     */
    upsert<T extends BorrowingsUpsertArgs>(args: SelectSubset<T, BorrowingsUpsertArgs<ExtArgs>>): Prisma__BorrowingsClient<$Result.GetResult<Prisma.$BorrowingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Borrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingsCountArgs} args - Arguments to filter Borrowings to count.
     * @example
     * // Count the number of Borrowings
     * const count = await prisma.borrowings.count({
     *   where: {
     *     // ... the filter for the Borrowings we want to count
     *   }
     * })
    **/
    count<T extends BorrowingsCountArgs>(
      args?: Subset<T, BorrowingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Borrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BorrowingsAggregateArgs>(args: Subset<T, BorrowingsAggregateArgs>): Prisma.PrismaPromise<GetBorrowingsAggregateType<T>>

    /**
     * Group by Borrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BorrowingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowingsGroupByArgs['orderBy'] }
        : { orderBy?: BorrowingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BorrowingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Borrowings model
   */
  readonly fields: BorrowingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Borrowings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrower<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksDefaultArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Borrowings model
   */
  interface BorrowingsFieldRefs {
    readonly id: FieldRef<"Borrowings", 'Int'>
    readonly userId: FieldRef<"Borrowings", 'Int'>
    readonly bookId: FieldRef<"Borrowings", 'Int'>
    readonly borrow_date: FieldRef<"Borrowings", 'DateTime'>
    readonly returned_at: FieldRef<"Borrowings", 'DateTime'>
    readonly createdAt: FieldRef<"Borrowings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Borrowings findUnique
   */
  export type BorrowingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * Filter, which Borrowings to fetch.
     */
    where: BorrowingsWhereUniqueInput
  }

  /**
   * Borrowings findUniqueOrThrow
   */
  export type BorrowingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * Filter, which Borrowings to fetch.
     */
    where: BorrowingsWhereUniqueInput
  }

  /**
   * Borrowings findFirst
   */
  export type BorrowingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * Filter, which Borrowings to fetch.
     */
    where?: BorrowingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingsOrderByWithRelationInput | BorrowingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrowings.
     */
    cursor?: BorrowingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrowings.
     */
    distinct?: BorrowingsScalarFieldEnum | BorrowingsScalarFieldEnum[]
  }

  /**
   * Borrowings findFirstOrThrow
   */
  export type BorrowingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * Filter, which Borrowings to fetch.
     */
    where?: BorrowingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingsOrderByWithRelationInput | BorrowingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrowings.
     */
    cursor?: BorrowingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrowings.
     */
    distinct?: BorrowingsScalarFieldEnum | BorrowingsScalarFieldEnum[]
  }

  /**
   * Borrowings findMany
   */
  export type BorrowingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * Filter, which Borrowings to fetch.
     */
    where?: BorrowingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingsOrderByWithRelationInput | BorrowingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Borrowings.
     */
    cursor?: BorrowingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrowings.
     */
    distinct?: BorrowingsScalarFieldEnum | BorrowingsScalarFieldEnum[]
  }

  /**
   * Borrowings create
   */
  export type BorrowingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Borrowings.
     */
    data: XOR<BorrowingsCreateInput, BorrowingsUncheckedCreateInput>
  }

  /**
   * Borrowings createMany
   */
  export type BorrowingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Borrowings.
     */
    data: BorrowingsCreateManyInput | BorrowingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Borrowings createManyAndReturn
   */
  export type BorrowingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * The data used to create many Borrowings.
     */
    data: BorrowingsCreateManyInput | BorrowingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Borrowings update
   */
  export type BorrowingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Borrowings.
     */
    data: XOR<BorrowingsUpdateInput, BorrowingsUncheckedUpdateInput>
    /**
     * Choose, which Borrowings to update.
     */
    where: BorrowingsWhereUniqueInput
  }

  /**
   * Borrowings updateMany
   */
  export type BorrowingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Borrowings.
     */
    data: XOR<BorrowingsUpdateManyMutationInput, BorrowingsUncheckedUpdateManyInput>
    /**
     * Filter which Borrowings to update
     */
    where?: BorrowingsWhereInput
    /**
     * Limit how many Borrowings to update.
     */
    limit?: number
  }

  /**
   * Borrowings updateManyAndReturn
   */
  export type BorrowingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * The data used to update Borrowings.
     */
    data: XOR<BorrowingsUpdateManyMutationInput, BorrowingsUncheckedUpdateManyInput>
    /**
     * Filter which Borrowings to update
     */
    where?: BorrowingsWhereInput
    /**
     * Limit how many Borrowings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Borrowings upsert
   */
  export type BorrowingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Borrowings to update in case it exists.
     */
    where: BorrowingsWhereUniqueInput
    /**
     * In case the Borrowings found by the `where` argument doesn't exist, create a new Borrowings with this data.
     */
    create: XOR<BorrowingsCreateInput, BorrowingsUncheckedCreateInput>
    /**
     * In case the Borrowings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowingsUpdateInput, BorrowingsUncheckedUpdateInput>
  }

  /**
   * Borrowings delete
   */
  export type BorrowingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
    /**
     * Filter which Borrowings to delete.
     */
    where: BorrowingsWhereUniqueInput
  }

  /**
   * Borrowings deleteMany
   */
  export type BorrowingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrowings to delete
     */
    where?: BorrowingsWhereInput
    /**
     * Limit how many Borrowings to delete.
     */
    limit?: number
  }

  /**
   * Borrowings without action
   */
  export type BorrowingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowings
     */
    select?: BorrowingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowings
     */
    omit?: BorrowingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    year: 'year',
    stock: 'stock',
    cloudinaryId: 'cloudinaryId',
    createdAt: 'createdAt',
    categoryId: 'categoryId'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId',
    bookId: 'bookId',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    address: 'address',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const BorrowingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    borrow_date: 'borrow_date',
    returned_at: 'returned_at',
    createdAt: 'createdAt'
  };

  export type BorrowingsScalarFieldEnum = (typeof BorrowingsScalarFieldEnum)[keyof typeof BorrowingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    profiles?: XOR<ProfilesNullableScalarRelationFilter, ProfilesWhereInput> | null
    borrowings?: BorrowingsListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profiles?: ProfilesOrderByWithRelationInput
    borrowings?: BorrowingsOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    profiles?: XOR<ProfilesNullableScalarRelationFilter, ProfilesWhereInput> | null
    borrowings?: BorrowingsListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type BooksWhereInput = {
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    id?: IntFilter<"Books"> | number
    title?: StringFilter<"Books"> | string
    author?: StringFilter<"Books"> | string
    year?: IntFilter<"Books"> | number
    stock?: IntFilter<"Books"> | number
    cloudinaryId?: StringNullableFilter<"Books"> | string | null
    createdAt?: DateTimeFilter<"Books"> | Date | string
    categoryId?: IntNullableFilter<"Books"> | number | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    borrowings?: BorrowingsListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type BooksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    year?: SortOrder
    stock?: SortOrder
    cloudinaryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    categories?: CategoriesOrderByWithRelationInput
    borrowings?: BorrowingsOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type BooksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    title?: StringFilter<"Books"> | string
    author?: StringFilter<"Books"> | string
    year?: IntFilter<"Books"> | number
    stock?: IntFilter<"Books"> | number
    cloudinaryId?: StringNullableFilter<"Books"> | string | null
    createdAt?: DateTimeFilter<"Books"> | Date | string
    categoryId?: IntNullableFilter<"Books"> | number | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    borrowings?: BorrowingsListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type BooksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    year?: SortOrder
    stock?: SortOrder
    cloudinaryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: BooksCountOrderByAggregateInput
    _avg?: BooksAvgOrderByAggregateInput
    _max?: BooksMaxOrderByAggregateInput
    _min?: BooksMinOrderByAggregateInput
    _sum?: BooksSumOrderByAggregateInput
  }

  export type BooksScalarWhereWithAggregatesInput = {
    AND?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    OR?: BooksScalarWhereWithAggregatesInput[]
    NOT?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Books"> | number
    title?: StringWithAggregatesFilter<"Books"> | string
    author?: StringWithAggregatesFilter<"Books"> | string
    year?: IntWithAggregatesFilter<"Books"> | number
    stock?: IntWithAggregatesFilter<"Books"> | number
    cloudinaryId?: StringNullableWithAggregatesFilter<"Books"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Books"> | Date | string
    categoryId?: IntNullableWithAggregatesFilter<"Books"> | number | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    bookId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    book?: BooksOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    bookId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    userId?: IntWithAggregatesFilter<"Review"> | number
    bookId?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ProfilesWhereInput = {
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    id?: IntFilter<"Profiles"> | number
    userId?: IntFilter<"Profiles"> | number
    address?: StringNullableFilter<"Profiles"> | string | null
    phone?: StringNullableFilter<"Profiles"> | string | null
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ProfilesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type ProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    address?: StringNullableFilter<"Profiles"> | string | null
    phone?: StringNullableFilter<"Profiles"> | string | null
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type ProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProfilesCountOrderByAggregateInput
    _avg?: ProfilesAvgOrderByAggregateInput
    _max?: ProfilesMaxOrderByAggregateInput
    _min?: ProfilesMinOrderByAggregateInput
    _sum?: ProfilesSumOrderByAggregateInput
  }

  export type ProfilesScalarWhereWithAggregatesInput = {
    AND?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    OR?: ProfilesScalarWhereWithAggregatesInput[]
    NOT?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profiles"> | number
    userId?: IntWithAggregatesFilter<"Profiles"> | number
    address?: StringNullableWithAggregatesFilter<"Profiles"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Profiles"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    createAt?: DateTimeFilter<"Categories"> | Date | string
    books?: BooksListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    books?: BooksOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    createAt?: DateTimeFilter<"Categories"> | Date | string
    books?: BooksListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    createAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type BorrowingsWhereInput = {
    AND?: BorrowingsWhereInput | BorrowingsWhereInput[]
    OR?: BorrowingsWhereInput[]
    NOT?: BorrowingsWhereInput | BorrowingsWhereInput[]
    id?: IntFilter<"Borrowings"> | number
    userId?: IntFilter<"Borrowings"> | number
    bookId?: IntFilter<"Borrowings"> | number
    borrow_date?: DateTimeFilter<"Borrowings"> | Date | string
    returned_at?: DateTimeNullableFilter<"Borrowings"> | Date | string | null
    createdAt?: DateTimeFilter<"Borrowings"> | Date | string
    borrower?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }

  export type BorrowingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    borrow_date?: SortOrder
    returned_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    borrower?: UsersOrderByWithRelationInput
    book?: BooksOrderByWithRelationInput
  }

  export type BorrowingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BorrowingsWhereInput | BorrowingsWhereInput[]
    OR?: BorrowingsWhereInput[]
    NOT?: BorrowingsWhereInput | BorrowingsWhereInput[]
    userId?: IntFilter<"Borrowings"> | number
    bookId?: IntFilter<"Borrowings"> | number
    borrow_date?: DateTimeFilter<"Borrowings"> | Date | string
    returned_at?: DateTimeNullableFilter<"Borrowings"> | Date | string | null
    createdAt?: DateTimeFilter<"Borrowings"> | Date | string
    borrower?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }, "id">

  export type BorrowingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    borrow_date?: SortOrder
    returned_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BorrowingsCountOrderByAggregateInput
    _avg?: BorrowingsAvgOrderByAggregateInput
    _max?: BorrowingsMaxOrderByAggregateInput
    _min?: BorrowingsMinOrderByAggregateInput
    _sum?: BorrowingsSumOrderByAggregateInput
  }

  export type BorrowingsScalarWhereWithAggregatesInput = {
    AND?: BorrowingsScalarWhereWithAggregatesInput | BorrowingsScalarWhereWithAggregatesInput[]
    OR?: BorrowingsScalarWhereWithAggregatesInput[]
    NOT?: BorrowingsScalarWhereWithAggregatesInput | BorrowingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Borrowings"> | number
    userId?: IntWithAggregatesFilter<"Borrowings"> | number
    bookId?: IntWithAggregatesFilter<"Borrowings"> | number
    borrow_date?: DateTimeWithAggregatesFilter<"Borrowings"> | Date | string
    returned_at?: DateTimeNullableWithAggregatesFilter<"Borrowings"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Borrowings"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profiles?: ProfilesCreateNestedOneWithoutUserInput
    borrowings?: BorrowingsCreateNestedManyWithoutBorrowerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profiles?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    borrowings?: BorrowingsUncheckedCreateNestedManyWithoutBorrowerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUpdateOneWithoutUserNestedInput
    borrowings?: BorrowingsUpdateManyWithoutBorrowerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    borrowings?: BorrowingsUncheckedUpdateManyWithoutBorrowerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksCreateInput = {
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    categories?: CategoriesCreateNestedOneWithoutBooksInput
    borrowings?: BorrowingsCreateNestedManyWithoutBookInput
    reviews?: ReviewCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateInput = {
    id?: number
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    categoryId?: number | null
    borrowings?: BorrowingsUncheckedCreateNestedManyWithoutBookInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneWithoutBooksNestedInput
    borrowings?: BorrowingsUpdateManyWithoutBookNestedInput
    reviews?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    borrowings?: BorrowingsUncheckedUpdateManyWithoutBookNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksCreateManyInput = {
    id?: number
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    categoryId?: number | null
  }

  export type BooksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewCreateInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
    book: BooksCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    bookId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    book?: BooksUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    bookId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesCreateInput = {
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutProfilesInput
  }

  export type ProfilesUncheckedCreateInput = {
    id?: number
    userId: number
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type ProfilesUpdateInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type ProfilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesCreateManyInput = {
    id?: number
    userId: number
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type ProfilesUpdateManyMutationInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    createAt?: Date | string
    books?: BooksCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    books?: BooksUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BooksUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BooksUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsCreateInput = {
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
    borrower: UsersCreateNestedOneWithoutBorrowingsInput
    book: BooksCreateNestedOneWithoutBorrowingsInput
  }

  export type BorrowingsUncheckedCreateInput = {
    id?: number
    userId: number
    bookId: number
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
  }

  export type BorrowingsUpdateInput = {
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrower?: UsersUpdateOneRequiredWithoutBorrowingsNestedInput
    book?: BooksUpdateOneRequiredWithoutBorrowingsNestedInput
  }

  export type BorrowingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsCreateManyInput = {
    id?: number
    userId: number
    bookId: number
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
  }

  export type BorrowingsUpdateManyMutationInput = {
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfilesNullableScalarRelationFilter = {
    is?: ProfilesWhereInput | null
    isNot?: ProfilesWhereInput | null
  }

  export type BorrowingsListRelationFilter = {
    every?: BorrowingsWhereInput
    some?: BorrowingsWhereInput
    none?: BorrowingsWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type BorrowingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null
    isNot?: CategoriesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BooksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    year?: SortOrder
    stock?: SortOrder
    cloudinaryId?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    year?: SortOrder
    stock?: SortOrder
    cloudinaryId?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    year?: SortOrder
    stock?: SortOrder
    cloudinaryId?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type BooksScalarRelationFilter = {
    is?: BooksWhereInput
    isNot?: BooksWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type ProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfilesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfilesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BooksListRelationFilter = {
    every?: BooksWhereInput
    some?: BooksWhereInput
    none?: BooksWhereInput
  }

  export type BooksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BorrowingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    borrow_date?: SortOrder
    returned_at?: SortOrder
    createdAt?: SortOrder
  }

  export type BorrowingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type BorrowingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    borrow_date?: SortOrder
    returned_at?: SortOrder
    createdAt?: SortOrder
  }

  export type BorrowingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    borrow_date?: SortOrder
    returned_at?: SortOrder
    createdAt?: SortOrder
  }

  export type BorrowingsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProfilesCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    connect?: ProfilesWhereUniqueInput
  }

  export type BorrowingsCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<BorrowingsCreateWithoutBorrowerInput, BorrowingsUncheckedCreateWithoutBorrowerInput> | BorrowingsCreateWithoutBorrowerInput[] | BorrowingsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBorrowerInput | BorrowingsCreateOrConnectWithoutBorrowerInput[]
    createMany?: BorrowingsCreateManyBorrowerInputEnvelope
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ProfilesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    connect?: ProfilesWhereUniqueInput
  }

  export type BorrowingsUncheckedCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<BorrowingsCreateWithoutBorrowerInput, BorrowingsUncheckedCreateWithoutBorrowerInput> | BorrowingsCreateWithoutBorrowerInput[] | BorrowingsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBorrowerInput | BorrowingsCreateOrConnectWithoutBorrowerInput[]
    createMany?: BorrowingsCreateManyBorrowerInputEnvelope
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfilesUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    upsert?: ProfilesUpsertWithoutUserInput
    disconnect?: ProfilesWhereInput | boolean
    delete?: ProfilesWhereInput | boolean
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutUserInput, ProfilesUpdateWithoutUserInput>, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type BorrowingsUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<BorrowingsCreateWithoutBorrowerInput, BorrowingsUncheckedCreateWithoutBorrowerInput> | BorrowingsCreateWithoutBorrowerInput[] | BorrowingsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBorrowerInput | BorrowingsCreateOrConnectWithoutBorrowerInput[]
    upsert?: BorrowingsUpsertWithWhereUniqueWithoutBorrowerInput | BorrowingsUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: BorrowingsCreateManyBorrowerInputEnvelope
    set?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    disconnect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    delete?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    update?: BorrowingsUpdateWithWhereUniqueWithoutBorrowerInput | BorrowingsUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: BorrowingsUpdateManyWithWhereWithoutBorrowerInput | BorrowingsUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: BorrowingsScalarWhereInput | BorrowingsScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfilesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    upsert?: ProfilesUpsertWithoutUserInput
    disconnect?: ProfilesWhereInput | boolean
    delete?: ProfilesWhereInput | boolean
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutUserInput, ProfilesUpdateWithoutUserInput>, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type BorrowingsUncheckedUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<BorrowingsCreateWithoutBorrowerInput, BorrowingsUncheckedCreateWithoutBorrowerInput> | BorrowingsCreateWithoutBorrowerInput[] | BorrowingsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBorrowerInput | BorrowingsCreateOrConnectWithoutBorrowerInput[]
    upsert?: BorrowingsUpsertWithWhereUniqueWithoutBorrowerInput | BorrowingsUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: BorrowingsCreateManyBorrowerInputEnvelope
    set?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    disconnect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    delete?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    update?: BorrowingsUpdateWithWhereUniqueWithoutBorrowerInput | BorrowingsUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: BorrowingsUpdateManyWithWhereWithoutBorrowerInput | BorrowingsUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: BorrowingsScalarWhereInput | BorrowingsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutBooksInput = {
    create?: XOR<CategoriesCreateWithoutBooksInput, CategoriesUncheckedCreateWithoutBooksInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutBooksInput
    connect?: CategoriesWhereUniqueInput
  }

  export type BorrowingsCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowingsCreateWithoutBookInput, BorrowingsUncheckedCreateWithoutBookInput> | BorrowingsCreateWithoutBookInput[] | BorrowingsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBookInput | BorrowingsCreateOrConnectWithoutBookInput[]
    createMany?: BorrowingsCreateManyBookInputEnvelope
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutBookInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BorrowingsUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowingsCreateWithoutBookInput, BorrowingsUncheckedCreateWithoutBookInput> | BorrowingsCreateWithoutBookInput[] | BorrowingsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBookInput | BorrowingsCreateOrConnectWithoutBookInput[]
    createMany?: BorrowingsCreateManyBookInputEnvelope
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoriesUpdateOneWithoutBooksNestedInput = {
    create?: XOR<CategoriesCreateWithoutBooksInput, CategoriesUncheckedCreateWithoutBooksInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutBooksInput
    upsert?: CategoriesUpsertWithoutBooksInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutBooksInput, CategoriesUpdateWithoutBooksInput>, CategoriesUncheckedUpdateWithoutBooksInput>
  }

  export type BorrowingsUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowingsCreateWithoutBookInput, BorrowingsUncheckedCreateWithoutBookInput> | BorrowingsCreateWithoutBookInput[] | BorrowingsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBookInput | BorrowingsCreateOrConnectWithoutBookInput[]
    upsert?: BorrowingsUpsertWithWhereUniqueWithoutBookInput | BorrowingsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowingsCreateManyBookInputEnvelope
    set?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    disconnect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    delete?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    update?: BorrowingsUpdateWithWhereUniqueWithoutBookInput | BorrowingsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowingsUpdateManyWithWhereWithoutBookInput | BorrowingsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowingsScalarWhereInput | BorrowingsScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookInput | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookInput | ReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BorrowingsUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowingsCreateWithoutBookInput, BorrowingsUncheckedCreateWithoutBookInput> | BorrowingsCreateWithoutBookInput[] | BorrowingsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowingsCreateOrConnectWithoutBookInput | BorrowingsCreateOrConnectWithoutBookInput[]
    upsert?: BorrowingsUpsertWithWhereUniqueWithoutBookInput | BorrowingsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowingsCreateManyBookInputEnvelope
    set?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    disconnect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    delete?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    connect?: BorrowingsWhereUniqueInput | BorrowingsWhereUniqueInput[]
    update?: BorrowingsUpdateWithWhereUniqueWithoutBookInput | BorrowingsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowingsUpdateManyWithWhereWithoutBookInput | BorrowingsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowingsScalarWhereInput | BorrowingsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookInput | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookInput | ReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type BooksCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BooksCreateWithoutReviewsInput, BooksUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutReviewsInput
    connect?: BooksWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type BooksUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<BooksCreateWithoutReviewsInput, BooksUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutReviewsInput
    upsert?: BooksUpsertWithoutReviewsInput
    connect?: BooksWhereUniqueInput
    update?: XOR<XOR<BooksUpdateToOneWithWhereWithoutReviewsInput, BooksUpdateWithoutReviewsInput>, BooksUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProfilesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProfilesInput
    upsert?: UsersUpsertWithoutProfilesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutProfilesInput, UsersUpdateWithoutProfilesInput>, UsersUncheckedUpdateWithoutProfilesInput>
  }

  export type BooksCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<BooksCreateWithoutCategoriesInput, BooksUncheckedCreateWithoutCategoriesInput> | BooksCreateWithoutCategoriesInput[] | BooksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutCategoriesInput | BooksCreateOrConnectWithoutCategoriesInput[]
    createMany?: BooksCreateManyCategoriesInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<BooksCreateWithoutCategoriesInput, BooksUncheckedCreateWithoutCategoriesInput> | BooksCreateWithoutCategoriesInput[] | BooksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutCategoriesInput | BooksCreateOrConnectWithoutCategoriesInput[]
    createMany?: BooksCreateManyCategoriesInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<BooksCreateWithoutCategoriesInput, BooksUncheckedCreateWithoutCategoriesInput> | BooksCreateWithoutCategoriesInput[] | BooksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutCategoriesInput | BooksCreateOrConnectWithoutCategoriesInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutCategoriesInput | BooksUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: BooksCreateManyCategoriesInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutCategoriesInput | BooksUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutCategoriesInput | BooksUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type BooksUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<BooksCreateWithoutCategoriesInput, BooksUncheckedCreateWithoutCategoriesInput> | BooksCreateWithoutCategoriesInput[] | BooksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutCategoriesInput | BooksCreateOrConnectWithoutCategoriesInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutCategoriesInput | BooksUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: BooksCreateManyCategoriesInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutCategoriesInput | BooksUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutCategoriesInput | BooksUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutBorrowingsInput = {
    create?: XOR<UsersCreateWithoutBorrowingsInput, UsersUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBorrowingsInput
    connect?: UsersWhereUniqueInput
  }

  export type BooksCreateNestedOneWithoutBorrowingsInput = {
    create?: XOR<BooksCreateWithoutBorrowingsInput, BooksUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutBorrowingsInput
    connect?: BooksWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutBorrowingsNestedInput = {
    create?: XOR<UsersCreateWithoutBorrowingsInput, UsersUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBorrowingsInput
    upsert?: UsersUpsertWithoutBorrowingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBorrowingsInput, UsersUpdateWithoutBorrowingsInput>, UsersUncheckedUpdateWithoutBorrowingsInput>
  }

  export type BooksUpdateOneRequiredWithoutBorrowingsNestedInput = {
    create?: XOR<BooksCreateWithoutBorrowingsInput, BooksUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutBorrowingsInput
    upsert?: BooksUpsertWithoutBorrowingsInput
    connect?: BooksWhereUniqueInput
    update?: XOR<XOR<BooksUpdateToOneWithWhereWithoutBorrowingsInput, BooksUpdateWithoutBorrowingsInput>, BooksUncheckedUpdateWithoutBorrowingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProfilesCreateWithoutUserInput = {
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type ProfilesUncheckedCreateWithoutUserInput = {
    id?: number
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type ProfilesCreateOrConnectWithoutUserInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
  }

  export type BorrowingsCreateWithoutBorrowerInput = {
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
    book: BooksCreateNestedOneWithoutBorrowingsInput
  }

  export type BorrowingsUncheckedCreateWithoutBorrowerInput = {
    id?: number
    bookId: number
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
  }

  export type BorrowingsCreateOrConnectWithoutBorrowerInput = {
    where: BorrowingsWhereUniqueInput
    create: XOR<BorrowingsCreateWithoutBorrowerInput, BorrowingsUncheckedCreateWithoutBorrowerInput>
  }

  export type BorrowingsCreateManyBorrowerInputEnvelope = {
    data: BorrowingsCreateManyBorrowerInput | BorrowingsCreateManyBorrowerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    book: BooksCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    comment: string
    bookId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfilesUpsertWithoutUserInput = {
    update: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    where?: ProfilesWhereInput
  }

  export type ProfilesUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfilesWhereInput
    data: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ProfilesUpdateWithoutUserInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsUpsertWithWhereUniqueWithoutBorrowerInput = {
    where: BorrowingsWhereUniqueInput
    update: XOR<BorrowingsUpdateWithoutBorrowerInput, BorrowingsUncheckedUpdateWithoutBorrowerInput>
    create: XOR<BorrowingsCreateWithoutBorrowerInput, BorrowingsUncheckedCreateWithoutBorrowerInput>
  }

  export type BorrowingsUpdateWithWhereUniqueWithoutBorrowerInput = {
    where: BorrowingsWhereUniqueInput
    data: XOR<BorrowingsUpdateWithoutBorrowerInput, BorrowingsUncheckedUpdateWithoutBorrowerInput>
  }

  export type BorrowingsUpdateManyWithWhereWithoutBorrowerInput = {
    where: BorrowingsScalarWhereInput
    data: XOR<BorrowingsUpdateManyMutationInput, BorrowingsUncheckedUpdateManyWithoutBorrowerInput>
  }

  export type BorrowingsScalarWhereInput = {
    AND?: BorrowingsScalarWhereInput | BorrowingsScalarWhereInput[]
    OR?: BorrowingsScalarWhereInput[]
    NOT?: BorrowingsScalarWhereInput | BorrowingsScalarWhereInput[]
    id?: IntFilter<"Borrowings"> | number
    userId?: IntFilter<"Borrowings"> | number
    bookId?: IntFilter<"Borrowings"> | number
    borrow_date?: DateTimeFilter<"Borrowings"> | Date | string
    returned_at?: DateTimeNullableFilter<"Borrowings"> | Date | string | null
    createdAt?: DateTimeFilter<"Borrowings"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    bookId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type CategoriesCreateWithoutBooksInput = {
    name: string
    createAt?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    createAt?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutBooksInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutBooksInput, CategoriesUncheckedCreateWithoutBooksInput>
  }

  export type BorrowingsCreateWithoutBookInput = {
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
    borrower: UsersCreateNestedOneWithoutBorrowingsInput
  }

  export type BorrowingsUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
  }

  export type BorrowingsCreateOrConnectWithoutBookInput = {
    where: BorrowingsWhereUniqueInput
    create: XOR<BorrowingsCreateWithoutBookInput, BorrowingsUncheckedCreateWithoutBookInput>
  }

  export type BorrowingsCreateManyBookInputEnvelope = {
    data: BorrowingsCreateManyBookInput | BorrowingsCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutBookInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput>
  }

  export type ReviewCreateManyBookInputEnvelope = {
    data: ReviewCreateManyBookInput | ReviewCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutBooksInput = {
    update: XOR<CategoriesUpdateWithoutBooksInput, CategoriesUncheckedUpdateWithoutBooksInput>
    create: XOR<CategoriesCreateWithoutBooksInput, CategoriesUncheckedCreateWithoutBooksInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutBooksInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutBooksInput, CategoriesUncheckedUpdateWithoutBooksInput>
  }

  export type CategoriesUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsUpsertWithWhereUniqueWithoutBookInput = {
    where: BorrowingsWhereUniqueInput
    update: XOR<BorrowingsUpdateWithoutBookInput, BorrowingsUncheckedUpdateWithoutBookInput>
    create: XOR<BorrowingsCreateWithoutBookInput, BorrowingsUncheckedCreateWithoutBookInput>
  }

  export type BorrowingsUpdateWithWhereUniqueWithoutBookInput = {
    where: BorrowingsWhereUniqueInput
    data: XOR<BorrowingsUpdateWithoutBookInput, BorrowingsUncheckedUpdateWithoutBookInput>
  }

  export type BorrowingsUpdateManyWithWhereWithoutBookInput = {
    where: BorrowingsScalarWhereInput
    data: XOR<BorrowingsUpdateManyMutationInput, BorrowingsUncheckedUpdateManyWithoutBookInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutBookInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBookInput, ReviewUncheckedUpdateWithoutBookInput>
    create: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBookInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBookInput, ReviewUncheckedUpdateWithoutBookInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBookInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBookInput>
  }

  export type UsersCreateWithoutReviewsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profiles?: ProfilesCreateNestedOneWithoutUserInput
    borrowings?: BorrowingsCreateNestedManyWithoutBorrowerInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profiles?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    borrowings?: BorrowingsUncheckedCreateNestedManyWithoutBorrowerInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type BooksCreateWithoutReviewsInput = {
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    categories?: CategoriesCreateNestedOneWithoutBooksInput
    borrowings?: BorrowingsCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    categoryId?: number | null
    borrowings?: BorrowingsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutReviewsInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutReviewsInput, BooksUncheckedCreateWithoutReviewsInput>
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUpdateOneWithoutUserNestedInput
    borrowings?: BorrowingsUpdateManyWithoutBorrowerNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    borrowings?: BorrowingsUncheckedUpdateManyWithoutBorrowerNestedInput
  }

  export type BooksUpsertWithoutReviewsInput = {
    update: XOR<BooksUpdateWithoutReviewsInput, BooksUncheckedUpdateWithoutReviewsInput>
    create: XOR<BooksCreateWithoutReviewsInput, BooksUncheckedCreateWithoutReviewsInput>
    where?: BooksWhereInput
  }

  export type BooksUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BooksWhereInput
    data: XOR<BooksUpdateWithoutReviewsInput, BooksUncheckedUpdateWithoutReviewsInput>
  }

  export type BooksUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneWithoutBooksNestedInput
    borrowings?: BorrowingsUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    borrowings?: BorrowingsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UsersCreateWithoutProfilesInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    borrowings?: BorrowingsCreateNestedManyWithoutBorrowerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutProfilesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    borrowings?: BorrowingsUncheckedCreateNestedManyWithoutBorrowerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutProfilesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
  }

  export type UsersUpsertWithoutProfilesInput = {
    update: XOR<UsersUpdateWithoutProfilesInput, UsersUncheckedUpdateWithoutProfilesInput>
    create: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutProfilesInput, UsersUncheckedUpdateWithoutProfilesInput>
  }

  export type UsersUpdateWithoutProfilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BorrowingsUpdateManyWithoutBorrowerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BorrowingsUncheckedUpdateManyWithoutBorrowerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BooksCreateWithoutCategoriesInput = {
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    borrowings?: BorrowingsCreateNestedManyWithoutBookInput
    reviews?: ReviewCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    borrowings?: BorrowingsUncheckedCreateNestedManyWithoutBookInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutCategoriesInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutCategoriesInput, BooksUncheckedCreateWithoutCategoriesInput>
  }

  export type BooksCreateManyCategoriesInputEnvelope = {
    data: BooksCreateManyCategoriesInput | BooksCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type BooksUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: BooksWhereUniqueInput
    update: XOR<BooksUpdateWithoutCategoriesInput, BooksUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BooksCreateWithoutCategoriesInput, BooksUncheckedCreateWithoutCategoriesInput>
  }

  export type BooksUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: BooksWhereUniqueInput
    data: XOR<BooksUpdateWithoutCategoriesInput, BooksUncheckedUpdateWithoutCategoriesInput>
  }

  export type BooksUpdateManyWithWhereWithoutCategoriesInput = {
    where: BooksScalarWhereInput
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type BooksScalarWhereInput = {
    AND?: BooksScalarWhereInput | BooksScalarWhereInput[]
    OR?: BooksScalarWhereInput[]
    NOT?: BooksScalarWhereInput | BooksScalarWhereInput[]
    id?: IntFilter<"Books"> | number
    title?: StringFilter<"Books"> | string
    author?: StringFilter<"Books"> | string
    year?: IntFilter<"Books"> | number
    stock?: IntFilter<"Books"> | number
    cloudinaryId?: StringNullableFilter<"Books"> | string | null
    createdAt?: DateTimeFilter<"Books"> | Date | string
    categoryId?: IntNullableFilter<"Books"> | number | null
  }

  export type UsersCreateWithoutBorrowingsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profiles?: ProfilesCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutBorrowingsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profiles?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutBorrowingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBorrowingsInput, UsersUncheckedCreateWithoutBorrowingsInput>
  }

  export type BooksCreateWithoutBorrowingsInput = {
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    categories?: CategoriesCreateNestedOneWithoutBooksInput
    reviews?: ReviewCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutBorrowingsInput = {
    id?: number
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
    categoryId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutBorrowingsInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutBorrowingsInput, BooksUncheckedCreateWithoutBorrowingsInput>
  }

  export type UsersUpsertWithoutBorrowingsInput = {
    update: XOR<UsersUpdateWithoutBorrowingsInput, UsersUncheckedUpdateWithoutBorrowingsInput>
    create: XOR<UsersCreateWithoutBorrowingsInput, UsersUncheckedCreateWithoutBorrowingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBorrowingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBorrowingsInput, UsersUncheckedUpdateWithoutBorrowingsInput>
  }

  export type UsersUpdateWithoutBorrowingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutBorrowingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BooksUpsertWithoutBorrowingsInput = {
    update: XOR<BooksUpdateWithoutBorrowingsInput, BooksUncheckedUpdateWithoutBorrowingsInput>
    create: XOR<BooksCreateWithoutBorrowingsInput, BooksUncheckedCreateWithoutBorrowingsInput>
    where?: BooksWhereInput
  }

  export type BooksUpdateToOneWithWhereWithoutBorrowingsInput = {
    where?: BooksWhereInput
    data: XOR<BooksUpdateWithoutBorrowingsInput, BooksUncheckedUpdateWithoutBorrowingsInput>
  }

  export type BooksUpdateWithoutBorrowingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneWithoutBooksNestedInput
    reviews?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutBorrowingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BorrowingsCreateManyBorrowerInput = {
    id?: number
    bookId: number
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    rating: number
    comment: string
    bookId: number
    createdAt?: Date | string
  }

  export type BorrowingsUpdateWithoutBorrowerInput = {
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BooksUpdateOneRequiredWithoutBorrowingsNestedInput
  }

  export type BorrowingsUncheckedUpdateWithoutBorrowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsUncheckedUpdateManyWithoutBorrowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BooksUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsCreateManyBookInput = {
    id?: number
    userId: number
    borrow_date?: Date | string
    returned_at?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyBookInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    createdAt?: Date | string
  }

  export type BorrowingsUpdateWithoutBookInput = {
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrower?: UsersUpdateOneRequiredWithoutBorrowingsNestedInput
  }

  export type BorrowingsUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingsUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    borrow_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutBookInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksCreateManyCategoriesInput = {
    id?: number
    title: string
    author: string
    year: number
    stock?: number
    cloudinaryId?: string | null
    createdAt?: Date | string
  }

  export type BooksUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BorrowingsUpdateManyWithoutBookNestedInput
    reviews?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BorrowingsUncheckedUpdateManyWithoutBookNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    cloudinaryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}