# Servers

Servers are extracted from the found application configuration file

`application.properties`
```properties
spring.kafka.bootstrap-servers=kafka.dc-1.lo:9092,kafka.dc-2.lo:9092
```

`application-test.properties`
```properties
spring.kafka.bootstrap-servers=kafka.dc-1.lo:9092,kafka.dc-2.lo:9092
```

The next servers will be registered:
- kafka.dc-1.lo:9092
- kafka.dc-2.lo:9092
- kafka-test.dc-1.lo:9092 - `test`
- kafka-test.dc-2.lo:9092 - `test`