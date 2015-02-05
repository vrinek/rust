(function() {var implementors = {};
implementors['serialize'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/error/trait.FromError.html' title='core::error::FromError'>FromError</a>&lt;<a class='struct' href='core/fmt/struct.Error.html' title='core::fmt::Error'>Error</a>&gt; for <a class='enum' href='serialize/json/enum.EncoderError.html' title='serialize::json::EncoderError'>EncoderError</a>",];
implementors['collections'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;'a, E&gt; <a class='trait' href='core/error/trait.FromError.html' title='core::error::FromError'>FromError</a>&lt;E&gt; for <a class='struct' href='collections/boxed/struct.Box.html' title='collections::boxed::Box'>Box</a>&lt;<a class='trait' href='core/error/trait.Error.html' title='core::error::Error'>Error</a> + 'a&gt;",];
implementors['rand'] = [];
implementors['core'] = [];
implementors['alloc'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;'a, E: <a class='trait' href='core/error/trait.Error.html' title='core::error::Error'>Error</a> + 'a&gt; <a class='trait' href='core/error/trait.FromError.html' title='core::error::FromError'>FromError</a>&lt;E&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='core/error/trait.Error.html' title='core::error::Error'>Error</a> + 'a&gt;",];
implementors['unicode'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
