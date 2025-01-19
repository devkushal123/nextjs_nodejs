Course NestJS learn - https://www.youtube.com/playlist?list=PLqLR2H326bY6eRNOXJxWQkvKNlzmJQfLj

https://github.com/officialcomputerbaba/amazing-nestjs


1. NestJS course content in screenshots
    a. NestJS Info
    b. Course content - 
        i.   NEstJS fundamentals
        ii.  Database
        iii. Auth
        iv.  Caching 
        v.   Files
        vi.  Useful packages
        vii. Logging and Documentation
        viii.Task Scheduling
        ix.  MVC
        x.   SSE-server sent events
        xi.  Web sockets
        xii. CQRS
        xiii.Microservices
        xiv. Hyybrid Apps

2. NestJS Architecture-
                It is very essential to know the building blocks of a NestJs application and how the different parts work together to power up our server-side app. 
        covers - 
            a. Understanding of Client-Server architecture
                - Normally, client sends request to server and server handles request based on the handler defined (manage by controllers).
            
            b. Understanding of Client-Server architecture with nestjs
                - IN case of NestJS, complete controller is defind inside module within application context.
                - Here, request will directly go to application on server sie then process internally.
                - Here 4-scopes coming due to this behaviour.
                    i.  Global
                    ii. Module
                    iii.Controller
                    iv. Request Handler/Route

                - to handle all the request from client nestJS providing some power(4) to work with req and res.
                    i.  Middleware  - it works only in case of request(to move or modified the request)
                    ii. Guard       - used in authentication (allowed or not)
                    iii.Interceptor - works in case of both req, res
                    iv. Pipe        - data transformation(or validation)

                - Exception filter -
                    handles all the exception in case of any condition
                
                - request response handling in nestJS
                    step1 - Client send request to server(here, request will come into nestJS application context )
                    step2 - In application context, firstly global me jo middleware , guard, interceptor and pipe call honge serially.
                    step3- Then request forward to controller layer --> then again layer ke jo super power h again call hongi n ===> then 
                        it will send request to request handler.
                    step 4-> then request handler will use service to perform business logic.
                    step5- step1 to step-4 will protect from exception filter layer se.       

                    step6 - service will send response to request handler after processing data and the  request handler jab return karega apne data ko , usse phle voh apna interseptor call karega.

                    step6-> data come to controller n its interceptor also call for response.
                    step 7 -> controller will forward to application level globals n then it will send data response to clinet.
                

                - Module segment and application ke under (globals)



3. NestJS #3 - Install & Setup | Project Structure | Application Bootstrapping | NPM scripts 
    - install nestjs cli globally, it will help to nestJS project    
        npm i -g @nestjs/cli

    - Now, we can create/setup new nestjs project, command-
        nest new <project-name>
        nest new yt-nest

    -By default express with come, but if u want to use fastify , u can install it.
        npm i @nestjs/platform-fastify -d