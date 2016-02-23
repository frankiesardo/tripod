(ns tripod.log)

(def ^:dynamic *logfn* nil)

#?(:clj
   (defmacro log* [level args]
     (let [ns-str (str *ns*)]
       `(and *logfn* (*logfn* ~ns-str ~level ~@args)))))

#?(:clj
   (defmacro info [& args]
     `(log* :info ~args)))

#?(:clj
   (defmacro debug [& args]
     `(log* :debug ~args)))

#?(:clj
   (defmacro trace [& args]
     `(log* :trace ~args)))