import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  FormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    optionId: fontSizesOptionsList[0].optionId,
    backgroundImage: '',
    topText: '',
    bottomText: '',
    selectedFontSize: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionID = event => {
    this.setState({optionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state
    this.setState({
      backgroundImage: backgroundImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      selectedFontSize: optionId,
    })
  }

  render() {
    const {
      backgroundImage,
      topText,
      bottomText,
      optionId,
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      selectedFontSize,
    } = this.state

    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
              <TextContent selectedFontSize={selectedFontSize}>
                {topText}
              </TextContent>
              <TextContent selectedFontSize={selectedFontSize}>
                {bottomText}
              </TextContent>
            </MemeContainer>
            <FormContainer onSubmit={this.onGenerateMeme}>
              <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
              <CustomInput
                type="text"
                id="backgroundImageUrl"
                value={backgroundImageInput}
                onChange={this.onChangeBackgroundImage}
                placeholder="Enter the Image URL"
                autoComplete="off"
              />
              <CustomLabel htmlFor="topText">Top Text</CustomLabel>
              <CustomInput
                type="text"
                id="topText"
                value={topTextInput}
                onChange={this.onChangeTopTextInput}
                placeholder="Enter the Top Text"
                autoComplete="off"
              />
              <CustomLabel htmlFor="topText">Bottom Text</CustomLabel>
              <CustomInput
                type="text"
                id="bottomText"
                value={bottomTextInput}
                onChange={this.onChangeBottomTextInput}
                placeholder="Enter the Bottom Text"
                autoComplete="off"
              />
              <CustomLabel htmlFor="select">Font Size</CustomLabel>
              <CustomSelect
                id="select"
                value={optionId}
                onChange={this.onChangeOptionID}
              >
                {fontSizesOptionsList.map(eachOption => (
                  <CustomOption
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </CustomOption>
                ))}
              </CustomSelect>
              <GenerateButton type="submit">Generate</GenerateButton>
            </FormContainer>
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
