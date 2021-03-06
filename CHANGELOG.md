# 0.3.17 (2017-10-06)

### Changes

* docs updated.

# 0.3.16 (2017-10-03)

### Bug fixed

**state.get()** type issue.

### Changes

**state** can be initialized by object only.

**wait** produce a promise rejection handler on an Error occur.

* docs updated.

# 0.3.15 (2017-10-02)

### Bug fixed

**state.get()** type issue.

# 0.3.14 (2017-10-02)

### Changes

**state**:

1) added bind method to initialize instance of the State class late, after creation.

2) the instance of the State class can be created without initialization.

* docs updated.

# 0.3.13 (2017-10-01)

### Bug fixed

**identity** If it get 0 as underlying value it execute transformation function without underlying value.

### Changes

**class Monad** converted to abstract.

**interface Binding** removed.

# 0.3.12 (2017-09-30)

### Changes

* type system.
* docs updated.

# 0.3.11 (2017-09-17)

### Bug fixed

* **either** Type of `v` - underlying value for the monad can be any type not object only.

# 0.3.9 (2017-09-07), 0.3.10 (2017-09-13)

### Changes

* **clone** added proper handling of objects that returned primitives. Example: new Date().

# 0.3.8 (2017-09-02)

### Bug fixed

* **clone** to prevent the error "TypeError: Cannot convert undefined or null to object" if cloned object.constructor() is undefined.

# 0.3.7 (2017-08-18)

### Changes

* **either** Type of constructor parameters changed to (v: any) => any.

# 0.3.6 (2017-08-12)

### Changes

* **Identity.bind()** To avoid weird behavior explicitly pointed behavior if it is absent second argument (v). Monad
tries to execute a function without the argument.

* docs updated.

# 0.3.5 (2017-08-10)

### Bug fixed

* **clone** small bugs fixed leading to errors while transpiling to JS in some cases for Webpack bundler.

# 0.3.4 (2017-08-08)

### Changes

* **hash** produced hash can be either positive or negative.

* dependencies updated.

# 0.3.3 (2017-06-09)

### Changes

* **hash** calculates a hash (32 bit, FNV-1a algorithm).

# 0.3.2 (2017-06-08)

### Changes

* **equality** function improved and optimized. Described constraints in API.

# 0.3.1 (2017-05-17)

### Changes

* added function **debounceTime**

# 0.3.0 (2017-05-17)

### Changes

* added class **AsyncFlow**, function **wait**
* **AsyncFlow, Flow** added the ability not to encapsulate the initial value.
* **List, Flow** changed error handling.
* docs updated.

# 0.2.9 (2017-05-14)

### Bug fixed

* **ErrorM monad** was absent in a lib bundle.

# 0.2.8 (2017-05-13)

### Changes

* docs updated.

### Bug fixed

* **State.put()**  was able to add new key to internal state object after instance of State have been created.

# 0.2.7 (2017-05-11)

### Changes

* **State.put()** doesn't return nothing, change state only.
* added Angular 2+ compatibility (JIT, AOT).
* docs updated.

# 0.2.6 (2017-05-09)

### Changes

* docs updated.

### Bug fixed

* **Flow, State** the changing of the variable with initial state of classes was able change internal state of classes after instances of them have been created.

# 0.2.5 (2017-05-09)

### Changes

* changed files structure.
* docs updated.

# 0.2.4 (2017-05-08)

### Changes

Equality function update.

# 0.2.3 (2017-05-08)

### Changes

* Added function equality - to check equality of data.
* docs updated.

# 0.2.2 (2017-05-06),
# 0.2.1 (2017-05-06)

### Changes

* Added monad Either.
* docs updated.

# 0.2.0 (2017-05-05),
# 0.1.0 (2017-05-05)

### Changes

* redesigned type system.
* docs updated.

# 0.0.6-0 (2017-05-03),
# 0.0.5 (2017-05-03),
# 0.0.4 (2017-05-03),
# 0.0.3 (2017-05-02),
# 0.0.2 (2017-05-02)

* Commissioning works, docs updated.

# 0.0.1 (2017-05-02)


Initial commit