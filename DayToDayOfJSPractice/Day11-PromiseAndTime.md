| Function             | Use Case                              | Handles Cancellation? | Uses Promise? |
|----------------------|---------------------------------------|------------------------|---------------|
| timeoutCancellation  | One-time timeout cancellation         | Yes                    | No            |
| intervalCancellation | Repeated execution with interval cancellation | Yes                    | No            |
| timeLimitWithPromise | Enforces time limit on a Promise-based task | Yes                    | Yes           |
| timeLimit            | Enforces time limit with async/await syntax | Yes                    | Yes           |
