(function() {var implementors = {};
implementors['std'] = ["<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.Weak.html' title='std::sync::Weak'>Weak</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='alloc/arc/struct.ArcInner.html' title='alloc::arc::ArcInner'>ArcInner</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/rc/struct.Weak.html' title='std::rc::Weak'>Weak</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='collections/dlist/struct.Rawlink.html' title='collections::dlist::Rawlink'>Rawlink</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/collections/ring_buf/struct.RingBuf.html' title='std::collections::ring_buf::RingBuf'>RingBuf</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/vec/struct.IntoIter.html' title='std::vec::IntoIter'>IntoIter</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/old_io/stdio/struct.StdinReader.html' title='std::old_io::stdio::StdinReader'>StdinReader</a>","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/old_io/stdio/struct.StdWriter.html' title='std::old_io::stdio::StdWriter'>StdWriter</a>","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/mpsc/struct.Select.html' title='std::sync::mpsc::Select'>Select</a>","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T: <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a>&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/mpsc/struct.Receiver.html' title='std::sync::mpsc::Receiver'>Receiver</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T: <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a>&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/mpsc/struct.Sender.html' title='std::sync::mpsc::Sender'>Sender</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T: <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a>&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/mpsc/struct.SyncSender.html' title='std::sync::mpsc::SyncSender'>SyncSender</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.Condvar.html' title='std::sync::Condvar'>Condvar</a>","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.StaticCondvar.html' title='std::sync::StaticCondvar'>StaticCondvar</a>","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T: <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a>&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.Mutex.html' title='std::sync::Mutex'>Mutex</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;'a, T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.MutexGuard.html' title='std::sync::MutexGuard'>MutexGuard</a>&lt;'a, T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;T: 'static + <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a>&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.RwLock.html' title='std::sync::RwLock'>RwLock</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.StaticRwLock.html' title='std::sync::StaticRwLock'>StaticRwLock</a>","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;'a, T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.RwLockReadGuard.html' title='std::sync::RwLockReadGuard'>RwLockReadGuard</a>&lt;'a, T&gt;","<a class='stability Unstable' title='Unstable: will be overhauled with new lifetime rules; see RFC 458'></a>impl&lt;'a, T&gt; <a class='trait' href='std/marker/trait.Send.html' title='std::marker::Send'>Send</a> for <a class='struct' href='std/sync/struct.RwLockWriteGuard.html' title='std::sync::RwLockWriteGuard'>RwLockWriteGuard</a>&lt;'a, T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
