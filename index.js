"use strict";

const Client = require("./lib/Client");

function AriJS(token, options) {
    return new Client(token, options);
}

AriJS.ApplicationCommand = require("./lib/structures/ApplicationCommand");
AriJS.Attachment = require("./lib/structures/Attachment");
AriJS.AutocompleteInteraction = require("./lib/structures/AutocompleteInteraction");
AriJS.Base = require("./lib/structures/Base");
AriJS.Bucket = require("./lib/util/Bucket");
AriJS.CategoryChannel = require("./lib/structures/CategoryChannel");
AriJS.Channel = require("./lib/structures/Channel");
AriJS.CommandInteraction = require("./lib/structures/CommandInteraction");
AriJS.ComponentInteraction = require("./lib/structures/ComponentInteraction");
AriJS.Client = Client;
AriJS.Collection = require("./lib/util/Collection");
AriJS.Command = require("./lib/command/Command");
AriJS.CommandClient = require("./lib/command/CommandClient");
AriJS.Constants = require("./lib/Constants");
AriJS.DiscordHTTPError = require("./lib/errors/DiscordHTTPError");
AriJS.DiscordRESTError = require("./lib/errors/DiscordRESTError");
AriJS.ExtendedUser = require("./lib/structures/ExtendedUser");
AriJS.Guild = require("./lib/structures/Guild");
AriJS.GuildChannel = require("./lib/structures/GuildChannel");
AriJS.GuildIntegration = require("./lib/structures/GuildIntegration");
AriJS.GuildPreview = require("./lib/structures/GuildPreview");
AriJS.GuildScheduledEvent = require("./lib/structures/GuildScheduledEvent");
AriJS.GuildTemplate = require("./lib/structures/GuildTemplate");
AriJS.Interaction = require("./lib/structures/Interaction");
AriJS.Invite = require("./lib/structures/Invite");
AriJS.Member = require("./lib/structures/Member");
AriJS.Message = require("./lib/structures/Message");
AriJS.ModalSubmitInteraction = require("./lib/structures/ModalSubmitInteraction.js");
AriJS.NewsChannel = require("./lib/structures/NewsChannel");
AriJS.NewsThreadChannel = require("./lib/structures/NewsThreadChannel");
AriJS.Permission = require("./lib/structures/Permission");
AriJS.PermissionOverwrite = require("./lib/structures/PermissionOverwrite");
AriJS.PingInteraction = require("./lib/structures/PingInteraction");
AriJS.PrivateChannel = require("./lib/structures/PrivateChannel");
AriJS.PrivateThreadChannel = require("./lib/structures/PrivateThreadChannel");
AriJS.PublicThreadChannel = require("./lib/structures/PublicThreadChannel");
AriJS.RequestHandler = require("./lib/rest/RequestHandler");
AriJS.Role = require("./lib/structures/Role");
AriJS.SequentialBucket = require("./lib/util/SequentialBucket");
AriJS.Shard = require("./lib/gateway/Shard");
AriJS.SharedStream = require("./lib/voice/SharedStream");
AriJS.StageChannel = require("./lib/structures/StageChannel");
AriJS.StageInstance = require("./lib/structures/StageInstance");
AriJS.StoreChannel = require("./lib/structures/StoreChannel");
AriJS.TextChannel = require("./lib/structures/TextChannel");
AriJS.TextVoiceChannel = require("./lib/structures/TextVoiceChannel");
AriJS.ThreadChannel = require("./lib/structures/ThreadChannel");
AriJS.ThreadMember = require("./lib/structures/ThreadMember");
AriJS.UnavailableGuild = require("./lib/structures/UnavailableGuild");
AriJS.User = require("./lib/structures/User");
AriJS.VERSION = require("./package.json").version;
AriJS.VoiceChannel = require("./lib/structures/VoiceChannel");
AriJS.VoiceConnection = require("./lib/voice/VoiceConnection");
AriJS.VoiceConnectionManager = require("./lib/voice/VoiceConnectionManager");
AriJS.VoiceState = require("./lib/structures/VoiceState");

module.exports = AriJS;
