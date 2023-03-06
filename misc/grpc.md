# protobuf

```
message Sample {
    int32 id = 100;

    repeated UninterpretedOption uninterpreted_option = 999;

    oneof message {
        string txt = 1;
        string img = 2;
    }

    enum Planet {
        UNKNOWN = 0;
        SUN = 1;
        MOON = 2;
        MERCURY = 3;
    }
}

message UninterpretedOption {
  message NamePart {
    required string name_part = 1;
    required bool is_extension = 2;
  }
  repeated NamePart name = 2;
  optional int32 identifier_value = 3;
  optional int32 positive_int_value = 4;
  optional int32 negative_int_value = 5;
  optional int32 double_value = 6;
  optional int32 string_value = 7;
  optional int32 aggregate_value = 8;
}
```
