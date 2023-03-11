# phpcs
[[composer]]

## インストール
```
composer require squizlabs/php_codesniffer
```


Genericはエラーになりすぎること多い、Squizも絞ったほうが良い

severityはエラーレベルのこと

phpcs.xml
```xml
<?xml version="1.0"?>
<ruleset name="PodPoint">
    <description>PodPoint Coding Standards.</description>

    <file>app</file>
    <file>tests</file>

    <rule ref="Generic.CodeAnalysis.EmptyStatement"/>
    <rule ref="Generic.Commenting.Todo"/>
    <rule ref="Generic.Commenting.DocComment"/>
    <rule ref="Squiz.Commenting.FunctionComment" />
    <rule ref="Squiz.Commenting.FunctionCommentThrowTag" />
    <rule ref="Squiz.Commenting.ClassComment" />

    <!-- Private methods MUST not be prefixed with an underscore -->
    <rule ref="Squiz.NamingConventions.ValidFunctionName.PrivateNoUnderscore">
        <severity>0</severity>
    </rule>

    <!-- Private properties MUST not be prefixed with an underscore -->
    <rule ref="Squiz.NamingConventions.ValidVariableName.PrivateNoUnderscore">
        <severity>0</severity>
    </rule>

    <rule ref="Generic.Commenting.Todo.CommentFound">
        <message>Please review this TODO comment: %s</message>
        <severity>3</severity>
    </rule>

    <rule ref="Generic.Commenting.Todo.CommentFound">
        <type>error</type>
    </rule>

    <rule ref="PSR2"/>
</ruleset>

```
