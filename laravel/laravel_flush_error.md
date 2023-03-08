```
@if (session('flash_message'))
    <div class="flash_message">
                {{ session('flash_message') }}
    </div>
@endif
```

```
        @if ($errors->any())
            <div class="col-12 mb-4">
                <div class="card card-primary bg-danger">
                    <div class="card-body">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        @endif
```