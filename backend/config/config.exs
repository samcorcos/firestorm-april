# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :firestorm, Firestorm.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "BM0l51fgyDtP7MSHIjZxTiB9nNbElZVeviAsoOxBO2Sgp0fYhvD3oMOPMPYiGNdW",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Firestorm.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

# Configure

config :ueberauth, Ueberauth,
  providers: [
    identity: {Ueberauth.Strategy.Identity, [callback_methods: ["POST"]]}
  ]

config :guardian, Guardian,
  issuer: "Firestorm",
  ttl: { 30, :days },
  secret_key: "BM0l51fgyDtP7fMSHIjZxTiB9nNbElZVeviAsoOxBO2Sgp0fYhvD3oMOPMPYiGNdW",
  serializer: Firestorm.GuardianSerializer
