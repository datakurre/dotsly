/**
 * This is a workaround to make TypeScript and svelte-check accept 'culori'
 * without full type definitions. It treats the module as type 'any'.
 */
declare module "culori";
