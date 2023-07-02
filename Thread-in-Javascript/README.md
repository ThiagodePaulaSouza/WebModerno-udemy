# How to make a thread in javascript?

## First of all what is a thread?

well I find this two links of what is a thead 

1. https://en.wikipedia.org/wiki/Thread_(computing)
2. https://stackoverflow.com/questions/5201852/what-is-a-thread-really

Lets start with the definition of a thread:

> "Thread of execution is the samllest sequence of programmed instructions that can be managed independently by a (scheduler) ... a thread is a component of a process."

[scheduler?](#scheduler)

> "The multiple threads of a given process of a given process my be executed concurrently (via multithreading capabilitities)"

---

> "Thread is an execution context, which is all the information a CPU needs to execute a stream of instructions."

> "Thread is an idependent set of values for the processor registers (for a single core). [...], it controls what executes in what order. It also includes the stack pointer, which had better point to a unique area of memory for each thread or else they will interfere with each other."

> "Threads are imperative program that run concurrently and share a memory space."

## Whats the difference between javascript and other langs

links of this topic:
- https://blog.logrocket.com/complete-guide-threads-node-js/#how-node-js-really-works

Lets consider javascript using nodejs, so nodejs follows the single-threaded event loop paradigm, thats a problem, to do a thread in node we need another whole context to use it properly right?
well in this first link it tell us:

> "A thread in node.js is a separate execution context in a single process. It is a lightweight, independent unit of processing that can run in parallel with other threads within the same process. It resides within process memory and it has an execution pointer. It has a stack of its own but a shared heap of the process."

but node use two kinds of threads -> main thread that handled bu the event loop and the worker pool(auxiliary).
main thread executes when starts, a worker thread is a aseparate execution that runs alongside the main

[single-threaded event loop paradigm?](#single-threaded-event-loop-paradigm)

## How to make Thread/Worker
...

---
## Notes:
### scheduler
action that assignin resources to perform tasks...

### single-threaded event loop paradigm
![image exemplo of nodejs single thread](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprocoders.tech%2Fwp-content%2Fuploads%2F2020%2F11%2FHow-Node.js-works-on-a-single-thread-1024x560.png&f=1&nofb=1&ipt=79ace103aba42038b50a70e3f5f59aedb771fd7727b2cddc90996e3305d564e5&ipo=images)