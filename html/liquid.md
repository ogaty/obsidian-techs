# liquid

```
{% assign my_variable = false %}
{% if my_variable != true %}
  This statement is valid.
{% endif %}

{% for product in collection.products %}
  {{- forloop.index }} {{ forloop.index0 }} {{ product.title }}
{% endfor %}

```
