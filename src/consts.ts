export const callNames: string[] = [] as const

export const eventNames = [
  'TransactionPayment.TransactionFeePaid',
  'XcmPallet.Attempted', // TODO не доделан
  'SubstrateBridgeOutboundChannel.MessageAccepted',
	'ParachainSystem.DownwardMessagesProcessed',
  'system.ExtrinsicFailed',
  'system.ExtrinsicSuccess',
  'SubstrateDispatch.MessageDispatched',
  'ParachainSystem.UpwardMessageSent',

  'BridgeProxy.RequestStatusUpdate', // TODO не доделан
  'ParachainBridgeApp.Minted', // TODO не доделан

  'XcmApp.AssetAddedToChannel', // TODO Нужен ли вообще?
] as const

export const versionsWithStringAssetId = ['1', '1Stage', '1Test', '2', '2Stage', '2Test', '3', '3Stage', '3Test', '4', '4Stage', '4Test', '5', '5Stage', '5Test', '6', '6Stage', '6Test', '7', '7Stage', '7Test', '8', '8Stage', '8Test', '9', '9Stage', '9Test', '10', '10Stage', '10Test', '11', '11Stage', '11Test', '12', '12Stage', '12Test', '13', '13Stage', '13Test', '14', '14Stage', '14Test', '15', '15Stage', '15Test', '16', '16Stage', '16Test', '17', '17Stage', '17Test', '18', '18Stage', '18Test', '19', '19Stage', '19Test', '20', '20Stage', '20Test', '21', '21Stage', '21Test', '22', '22Stage', '22Test', '23', '23Stage', '23Test', '24', '24Stage', '24Test', '25', '25Stage', '25Test', '26', '26Stage', '26Test', '27', '27Stage', '27Test', '28', '28Stage', '28Test', '29', '29Stage', '29Test', '30', '30Stage', '30Test', '31', '31Stage', '31Test', '32', '32Stage', '32Test', '33', '33Stage', '33Test'] as const