# twig

```
{% set users = ['foo', 'bar', 'baz'] %}
{# use loop.first #}
{% for user in users %}
    {% if loop.first %}
        {{ user }}
    {% endif %}
{% endfor %}
```
