#シーケンス図

vscode拡張はplantuml syntaxとsimple viewerがいい感じ

サーバーをplantuml serverにする
ホスト名をhttps://www.plantuml.com/plantumlにする

docker入れてローカルもありかも

自分：actor `#色`
ターゲット：participant、database、collections、queueあたり

```plantuml
@startuml test

actor myuser
participant target1
participant target2

myuser->target1: test API
activate target1

    loop 
        alt condition1
            target1->target2: test2 API
            activate target2
                target1<--target2: test2 response
                note right
                    success
                end note
            deactivate target2
        else condition2
            target1->target2: test2 API
            activate target2
                target1<--target2: test2 response
                note right
                    fail
                end note
            deactivate target2
        end

    end

    myuser<--target1: test response
deactivate target1

@enduml
```

```plantuml

actor myuser
participant target
myuser->target: test
```