import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

    val appName         = "angularjs-crypto"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq()

    val main = play.Project(appName, appVersion, appDependencies).settings(
      // Add your own project settings here   
       resolvers += "spray repo" at "http://repo.spray.io/"
    )
}
