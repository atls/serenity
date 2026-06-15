/// <reference types="@atls/code-runtime/types" />

declare module 'uuid' {
  function uuid(): string

  namespace uuid {
    function v4(): string
  }

  export = uuid
}
