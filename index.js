"use strict";

const Client = require("./lib/Client");

function Tibcord(token, options) {
    return new Client(token, options);
}

Tibcord.ApplicationCommand = require("./lib/structures/ApplicationCommand");
Tibcord.Attachment = require("./lib/structures/Attachment");
Tibcord.AutocompleteInteraction = require("./lib/structures/AutocompleteInteraction");
Tibcord.Base = require("./lib/structures/Base");
Tibcord.Bucket = require("./lib/util/Bucket");
Tibcord.CategoryChannel = require("./lib/structures/CategoryChannel");
Tibcord.Channel = require("./lib/structures/Channel");
Tibcord.CommandInteraction = require("./lib/structures/CommandInteraction");
Tibcord.ComponentInteraction = require("./lib/structures/ComponentInteraction");
Tibcord.Client = Client;
Tibcord.Collection = require("./lib/util/Collection");
Tibcord.Command = require("./lib/command/Command");
Tibcord.CommandClient = require("./lib/command/CommandClient");
Tibcord.Constants = require("./lib/Constants");
Tibcord.DiscordHTTPError = require("./lib/errors/DiscordHTTPError");
Tibcord.DiscordRESTError = require("./lib/errors/DiscordRESTError");
Tibcord.ExtendedUser = require("./lib/structures/ExtendedUser");
Tibcord.Guild = require("./lib/structures/Guild");
Tibcord.GuildChannel = require("./lib/structures/GuildChannel");
Tibcord.GuildIntegration = require("./lib/structures/GuildIntegration");
Tibcord.GuildPreview = require("./lib/structures/GuildPreview");
Tibcord.GuildScheduledEvent = require("./lib/structures/GuildScheduledEvent");
Tibcord.GuildTemplate = require("./lib/structures/GuildTemplate");
Tibcord.Interaction = require("./lib/structures/Interaction");
Tibcord.Invite = require("./lib/structures/Invite");
Tibcord.Member = require("./lib/structures/Member");
Tibcord.Message = require("./lib/structures/Message");
Tibcord.ModalSubmitInteraction = require("./lib/structures/ModalSubmitInteraction.js");
Tibcord.NewsChannel = require("./lib/structures/NewsChannel");
Tibcord.NewsThreadChannel = require("./lib/structures/NewsThreadChannel");
Tibcord.Permission = require("./lib/structures/Permission");
Tibcord.PermissionOverwrite = require("./lib/structures/PermissionOverwrite");
Tibcord.PingInteraction = require("./lib/structures/PingInteraction");
Tibcord.PrivateChannel = require("./lib/structures/PrivateChannel");
Tibcord.PrivateThreadChannel = require("./lib/structures/PrivateThreadChannel");
Tibcord.PublicThreadChannel = require("./lib/structures/PublicThreadChannel");
Tibcord.RequestHandler = require("./lib/rest/RequestHandler");
Tibcord.Role = require("./lib/structures/Role");
Tibcord.SequentialBucket = require("./lib/util/SequentialBucket");
Tibcord.Shard = require("./lib/gateway/Shard");
Tibcord.SharedStream = require("./lib/voice/SharedStream");
Tibcord.StageChannel = require("./lib/structures/StageChannel");
Tibcord.StageInstance = require("./lib/structures/StageInstance");
Tibcord.StoreChannel = require("./lib/structures/StoreChannel");
Tibcord.TextChannel = require("./lib/structures/TextChannel");
Tibcord.TextVoiceChannel = require("./lib/structures/TextVoiceChannel");
Tibcord.ThreadChannel = require("./lib/structures/ThreadChannel");
Tibcord.ThreadMember = require("./lib/structures/ThreadMember");
Tibcord.UnavailableGuild = require("./lib/structures/UnavailableGuild");
Tibcord.User = require("./lib/structures/User");
Tibcord.VERSION = require("./package.json").version;
Tibcord.VoiceChannel = require("./lib/structures/VoiceChannel");
Tibcord.VoiceConnection = require("./lib/voice/VoiceConnection");
Tibcord.VoiceConnectionManager = require("./lib/voice/VoiceConnectionManager");
Tibcord.VoiceState = require("./lib/structures/VoiceState");

module.exports = Tibcord;
