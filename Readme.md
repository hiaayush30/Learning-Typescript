- TS is a development tool (supserset of JS)
- The job of TS is to do static checking
- static checking is present in java ,golang etc.It means the syntax of the language is constantly being analyzed by the ides(analyze while we type)

## Types in TS
- Number,String,Null,Void,Any,Never,Undefined,Boolean
- Object,Array,Tuples,unknown
- The type in ts is always written in lower case

## Type and Interface
In TypeScript, both `type` and `interface` can be used to define the shape of an object, but they have some differences in their capabilities and use cases.

### `type` vs `interface`

1. **Basic Syntax and Usage:**

   - **`type` Declaration:**
     ```typescript
     type User = {
         name: string;
         email: string;
         isActive: boolean;
     };
     ```

   - **`interface` Declaration:**
     ```typescript
     interface User {
         name: string;
         email: string;
         isActive: boolean;
     }
     ```

   Both of these are functionally the same when defining an object type, like in your example. They both define an object with `name`, `email`, and `isActive` properties, and all properties are required.

2. **Extending/Combining Types:**

   - **`interface`** can be extended using the `extends` keyword:
     ```typescript
     interface User {
         name: string;
         email: string;
         isActive: boolean;
     }

     interface AdminUser extends User {
         role: string;
     }
     ```
     This creates a new `AdminUser` interface that extends `User` by adding a `role` property.

   - **`type`** can be combined with other types using intersections (`&`):
     ```typescript
     type User = {
         name: string;
         email: string;
         isActive: boolean;
     };

     type AdminUser = User & {
         role: string;
     };
     ```
     This creates a new `AdminUser` type by intersecting `User` with an object containing a `role` property.

3. **Differences in Capabilities:**
   - **`type`** is more versatile. It can represent not just object types, but also unions, intersections, tuples, and more complex structures:
     ```typescript
     type ID = string | number;
     type Response<T> = {
         data: T;
         error?: string;
     };
     ```

   - **`interface`** is limited to describing the shape of objects but has better support for declaration merging. This means you can define the same interface multiple times, and TypeScript will merge them:
     ```typescript
     interface User {
         name: string;
     }

     interface User {
         email: string;
     }

     // The final User interface will have both `name` and `email` properties.
     ```

4. **Which One to Use?**
   - Use **`interface`** when you need to define the shape of an object and possibly extend or merge it later.
   - Use **`type`** when you need more flexibility, such as defining unions, intersections, or other non-object types.

In your example, if you only need to define the shape of an object, you can use either `type` or `interface`. However, if you might need to extend or merge it later, `interface` might be a better choice.
