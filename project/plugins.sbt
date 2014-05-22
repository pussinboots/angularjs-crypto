// Comment to get more information during initialization
logLevel := Level.Warn

//scalaVersion := "2.9.2"

// The Typesafe repository
resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"
 
resolvers += Resolver.sonatypeRepo("public")

// Use the Play sbt plugin for Play projects
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.2.3")

//addSbtPlugin("com.typesafe.sbt" % "sbt-start-script" % "0.9.0")
